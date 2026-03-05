// Utility functions

/**
 * Calculate progress percentage
 */
export function calculateProgress(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

/**
 * Determine project status based on progress and blockers
 */
export function determineStatus(
  progress: number,
  hasBlockers: boolean,
  phase: string
): 'on-track' | 'attention' | 'blocked' {
  if (hasBlockers) return 'blocked';
  if (phase === 'Specs' || phase === 'Design') return 'attention';
  if (progress >= 80) return 'on-track';
  if (progress >= 50) return 'attention';
  return 'attention';
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Calculate velocity (tasks per week)
 */
export function calculateVelocity(
  recentCompletions: Array<{ completedAt?: Date }>,
  weeks: number = 4
): number {
  const now = new Date();
  const weeksAgo = new Date(now.getTime() - weeks * 7 * 24 * 60 * 60 * 1000);
  
  const recentTasks = recentCompletions.filter(
    task => task.completedAt && task.completedAt >= weeksAgo
  );
  
  return Math.round(recentTasks.length / weeks);
}

/**
 * Estimate completion date based on velocity and remaining tasks
 */
export function estimateCompletion(
  remainingTasks: number,
  velocity: number
): string {
  if (velocity === 0) return 'Unknown';
  
  const weeksRemaining = Math.ceil(remainingTasks / velocity);
  const completionDate = new Date();
  completionDate.setDate(completionDate.getDate() + weeksRemaining * 7);
  
  return completionDate.toISOString().split('T')[0]; // YYYY-MM-DD
}

/**
 * Get tasks completed this week
 */
export function getTasksThisWeek(
  completions: Array<{ completedAt?: Date }>
): number {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  return completions.filter(
    task => task.completedAt && task.completedAt >= weekAgo
  ).length;
}

/**
 * Classify items by status
 */
export function classifyByStatus(items: any[]): {
  inProgress: any[];
  recentWins: any[];
  blockers: any[];
} {
  const inProgress = items.filter(
    item => item.status === 'In Progress' && item.state === 'OPEN'
  );
  
  const recentWins = items
    .filter(item => item.state === 'CLOSED' && item.closedAt)
    .sort((a, b) => new Date(b.closedAt).getTime() - new Date(a.closedAt).getTime())
    .slice(0, 3);
  
  const blockers = items.filter(
    item => item.labels?.some((l: any) => l.name === 'blocked') && item.state === 'OPEN'
  );
  
  return { inProgress, recentWins, blockers };
}
