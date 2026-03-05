// Timeline/milestone display

import type { Milestone } from '@/lib/types';

interface TimelineProps {
  milestones: Milestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  if (milestones.length === 0) {
    return (
      <div className="text-sm text-gray-500 italic">
        No upcoming milestones
      </div>
    );
  }

  const getStatusIcon = (status: Milestone['status']) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🚧';
      case 'upcoming': return '📅';
      case 'overdue': return '⚠️';
      default: return '📍';
    }
  };

  const getStatusColor = (status: Milestone['status']) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'in-progress': return 'text-blue-600';
      case 'upcoming': return 'text-gray-600';
      case 'overdue': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-3">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-lg flex-shrink-0">
            {getStatusIcon(milestone.status)}
          </span>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium ${getStatusColor(milestone.status)}`}>
              {milestone.title}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {new Date(milestone.dueDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
