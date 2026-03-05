// Main project card component

import type { Project } from '@/lib/types';
import { StatusBadge } from './StatusBadge';
import { ProgressBar } from './ProgressBar';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {project.name}
        </h2>
        <a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {project.owner} • #{project.projectNumber}
        </a>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <ProgressBar progress={project.progress} size="lg" />
      </div>

      {/* Status Badge */}
      <div className="mb-4">
        <StatusBadge status={project.status} phase={project.phase} />
      </div>

      {/* Recent Wins */}
      {project.recentWins.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            ✅ Recent Wins ({project.recentWins.length})
          </h3>
          <ul className="space-y-1">
            {project.recentWins.map((task) => (
              <li key={task.id} className="text-sm text-gray-600">
                <a 
                  href={task.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  • {task.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* In Progress */}
      {project.inProgress.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            🚧 In Progress ({project.inProgress.length})
          </h3>
          <ul className="space-y-1">
            {project.inProgress.map((task) => (
              <li key={task.id} className="text-sm text-gray-600">
                <a 
                  href={task.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  • {task.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Blockers */}
      {project.blockers.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-red-700 mb-2">
            ⚠️ Blockers ({project.blockers.length})
          </h3>
          <ul className="space-y-1">
            {project.blockers.map((task) => (
              <li key={task.id} className="text-sm text-red-600">
                <a 
                  href={task.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-800"
                >
                  • {task.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics Footer */}
      <div className="pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Velocity:</span>
            <span className="ml-2 font-semibold text-gray-900">
              {project.metrics.velocity}/week
            </span>
          </div>
          <div>
            <span className="text-gray-500">This Week:</span>
            <span className="ml-2 font-semibold text-gray-900">
              {project.metrics.tasksCompletedThisWeek}
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-500">Est. Complete:</span>
            <span className="ml-2 font-semibold text-gray-900">
              {project.metrics.estimatedCompletion}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
