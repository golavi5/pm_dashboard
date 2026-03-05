// Dashboard data types

export interface Project {
  id: string;
  name: string;
  owner: string;
  projectNumber: number;
  url: string;
  progress: number; // 0-100
  phase: 'Specs' | 'Design' | 'Tasks' | 'In Progress' | 'Done';
  status: 'on-track' | 'attention' | 'blocked';
  recentWins: TaskSummary[];
  inProgress: TaskSummary[];
  blockers: TaskSummary[];
  metrics: ProjectMetrics;
  timeline: Milestone[];
}

export interface TaskSummary {
  id: string;
  title: string;
  url: string;
  completedAt?: Date;
}

export interface ProjectMetrics {
  tasksCompletedThisWeek: number;
  velocity: number; // tasks per week
  estimatedCompletion: string; // ISO date
  totalTasks: number;
  completedTasks: number;
}

export interface Milestone {
  title: string;
  dueDate: string;
  status: 'upcoming' | 'in-progress' | 'completed' | 'overdue';
}

export interface GitHubProjectItem {
  id: string;
  content?: {
    __typename: string;
    number: number;
    title: string;
    state: 'OPEN' | 'CLOSED';
    url: string;
    labels: {
      nodes: Array<{ name: string }>;
    };
    closedAt?: string;
    createdAt: string;
  };
  fieldValues: {
    nodes: Array<{
      __typename: string;
      field?: {
        name: string;
      };
      name?: string; // For single select fields (status)
      text?: string; // For text fields
    }>;
  };
}

export interface GitHubProject {
  id: string;
  number: number;
  title: string;
  url: string;
  items: {
    nodes: GitHubProjectItem[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
}

export interface ProjectConfig {
  id: string;
  name: string;
  owner: string;
  projectNumber: number;
  repo?: string; // Optional: specific repo to track
}

export interface DashboardData {
  projects: Project[];
  lastUpdated: string;
}
