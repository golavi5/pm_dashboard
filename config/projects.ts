// Project configuration (backward compatibility)
// For new multi-tenant setups, use config/organizations.ts instead

import { getAllProjects } from './organizations';

export const TRACKED_PROJECTS = getAllProjects();
