// GitHub API client using GraphQL

import { graphql } from '@octokit/graphql';
import type {
  GitHubProject,
  GitHubProjectItem,
  Project,
  ProjectConfig,
  TaskSummary
} from './types';
import {
  calculateProgress,
  determineStatus,
  calculateVelocity,
  estimateCompletion,
  getTasksThisWeek,
  classifyByStatus
} from './utils';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.warn('GITHUB_TOKEN not set - API calls will fail');
}

const githubGraphQL = graphql.defaults({
  headers: {
    authorization: `token ${GITHUB_TOKEN}`,
  },
});

/**
 * Fetch project data from GitHub Projects API
 */
export async function fetchGitHubProject(
  owner: string,
  projectNumber: number
): Promise<GitHubProject> {
  const query = `
    query($owner: String!, $number: Int!) {
      user(login: $owner) {
        projectV2(number: $number) {
          id
          number
          title
          url
          items(first: 100) {
            nodes {
              id
              content {
                __typename
                ... on Issue {
                  number
                  title
                  state
                  url
                  createdAt
                  closedAt
                  labels(first: 10) {
                    nodes {
                      name
                    }
                  }
                }
              }
              fieldValues(first: 10) {
                nodes {
                  __typename
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    field {
                      ... on ProjectV2SingleSelectField {
                        name
                      }
                    }
                    name
                  }
                  ... on ProjectV2ItemFieldTextValue {
                    field {
                      ... on ProjectV2Field {
                        name
                      }
                    }
                    text
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
      organization(login: $owner) {
        projectV2(number: $number) {
          id
          number
          title
          url
          items(first: 100) {
            nodes {
              id
              content {
                __typename
                ... on Issue {
                  number
                  title
                  state
                  url
                  createdAt
                  closedAt
                  labels(first: 10) {
                    nodes {
                      name
                    }
                  }
                }
              }
              fieldValues(first: 10) {
                nodes {
                  __typename
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    field {
                      ... on ProjectV2SingleSelectField {
                        name
                      }
                    }
                    name
                  }
                  ... on ProjectV2ItemFieldTextValue {
                    field {
                      ... on ProjectV2Field {
                        name
                      }
                    }
                    text
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    }
  `;

  try {
    const result: any = await githubGraphQL(query, { owner, number: projectNumber });
    
    // Try user first, then organization
    const project = result.user?.projectV2 || result.organization?.projectV2;
    
    if (!project) {
      throw new Error(`Project #${projectNumber} not found for ${owner}`);
    }
    
    return project as GitHubProject;
  } catch (error) {
    console.error('Error fetching GitHub project:', error);
    throw error;
  }
}

/**
 * Transform GitHub project data to dashboard format
 */
export function transformProjectData(
  config: ProjectConfig,
  githubProject: GitHubProject
): Project {
  const items = githubProject.items.nodes.filter(item => item.content);
  
  // Extract status from field values
  const itemsWithStatus = items.map(item => {
    const statusField = item.fieldValues.nodes.find(
      field => field.field?.name === 'Status'
    );
    
    return {
      ...item.content,
      status: statusField?.name || 'Unknown',
      labels: item.content?.labels.nodes.map(l => l.name) || [],
      closedAt: item.content?.closedAt,
      createdAt: item.content?.createdAt
    };
  });
  
  // Count by status
  const totalTasks = itemsWithStatus.length;
  const completedTasks = itemsWithStatus.filter(item => item.state === 'CLOSED').length;
  const progress = calculateProgress(completedTasks, totalTasks);
  
  // Classify tasks
  const { inProgress, recentWins, blockers } = classifyByStatus(itemsWithStatus);
  
  // Get current phase (most common status among open items)
  const openItems = itemsWithStatus.filter(item => item.state === 'OPEN');
  const phaseCount: Record<string, number> = {};
  openItems.forEach(item => {
    phaseCount[item.status] = (phaseCount[item.status] || 0) + 1;
  });
  const currentPhase = Object.keys(phaseCount).sort((a, b) => phaseCount[b] - phaseCount[a])[0] || 'Done';
  
  // Calculate metrics
  const completions = itemsWithStatus
    .filter(item => item.closedAt)
    .map(item => ({ completedAt: new Date(item.closedAt!) }));
  
  const velocity = calculateVelocity(completions);
  const tasksCompletedThisWeek = getTasksThisWeek(completions);
  const remainingTasks = totalTasks - completedTasks;
  const estimatedCompletion = estimateCompletion(remainingTasks, velocity);
  
  // Determine overall status
  const status = determineStatus(progress, blockers.length > 0, currentPhase);
  
  // Format task summaries
  const recentWinsSummary: TaskSummary[] = recentWins.map(item => ({
    id: item.number?.toString() || '',
    title: item.title || '',
    url: item.url || '',
    completedAt: item.closedAt ? new Date(item.closedAt) : undefined
  }));
  
  const inProgressSummary: TaskSummary[] = inProgress.map(item => ({
    id: item.number?.toString() || '',
    title: item.title || '',
    url: item.url || ''
  }));
  
  const blockersSummary: TaskSummary[] = blockers.map(item => ({
    id: item.number?.toString() || '',
    title: item.title || '',
    url: item.url || ''
  }));
  
  return {
    id: config.id,
    name: config.name,
    owner: config.owner,
    projectNumber: config.projectNumber,
    url: githubProject.url,
    progress,
    phase: currentPhase as any,
    status,
    recentWins: recentWinsSummary,
    inProgress: inProgressSummary,
    blockers: blockersSummary,
    metrics: {
      tasksCompletedThisWeek,
      velocity,
      estimatedCompletion,
      totalTasks,
      completedTasks
    },
    timeline: [] // TODO: Extract from milestones
  };
}

/**
 * Fetch all configured projects
 */
export async function fetchAllProjects(configs: ProjectConfig[]): Promise<Project[]> {
  const projects = await Promise.all(
    configs.map(async (config) => {
      try {
        const githubProject = await fetchGitHubProject(config.owner, config.projectNumber);
        return transformProjectData(config, githubProject);
      } catch (error) {
        console.error(`Error fetching project ${config.name}:`, error);
        return null;
      }
    })
  );
  
  return projects.filter(Boolean) as Project[];
}
