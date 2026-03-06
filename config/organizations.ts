// Multi-tenant organization configuration
// Each organization has its own set of tracked projects

import type { ProjectConfig } from '../lib/types';

export interface Organization {
  slug: string;           // URL slug (must be lowercase, no spaces)
  name: string;           // Display name
  description?: string;   // Optional organization description
  projects: ProjectConfig[];
}

export const ORGANIZATIONS: Organization[] = [
  {
    slug: 'grupo-z5',
    name: 'Grupo Z5',
    description: 'Grupo Z5 development projects',
    projects: [
      {
        id: 'realtime-agents',
        name: 'Realtime Agents',
        owner: 'Grupo-Z5',
        projectNumber: 2,
        repo: 'Grupo-Z5/realtime-agents'
      }
    ]
  },
  {
    slug: 'golavi5',
    name: 'Personal Projects',
    description: 'Personal development projects',
    projects: [
      {
        id: 'pm-dashboard',
        name: 'PM Dashboard',
        owner: 'golavi5',
        projectNumber: 3,
        repo: 'golavi5/pm_dashboard'
      }
    ]
  }
];

// Helper: Get organization by slug
export function getOrganization(slug: string): Organization | undefined {
  return ORGANIZATIONS.find(org => org.slug === slug);
}

// Helper: Get all organization slugs (for static path generation)
export function getAllOrganizationSlugs(): string[] {
  return ORGANIZATIONS.map(org => org.slug);
}

// Helper: Get all projects (backward compatibility)
export function getAllProjects(): ProjectConfig[] {
  return ORGANIZATIONS.flatMap(org => org.projects);
}
