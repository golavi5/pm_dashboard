// Main project card component

import type { Project } from '@/lib/types';
import { StatusBadge } from './StatusBadge';
import { ProgressBar } from './ProgressBar';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700 p-6 hover:shadow-xl dark:hover:shadow-gray-700 transition-all duration-200">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {project.name}
        </h2>
        <a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
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
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            ✅ Recent Wins ({project.recentWins.length})
          </h3>
          <ul className="space-y-1">
            {project.recentWins.map((task) => (
              <li key={task.id} className="text-sm text-gray-600 dark:text-gray-400">
                <a 
                  href={task.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
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
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            🚧 In Progress ({project.inProgress.length})
          </h3>
          <ul className="space-y-1">
            {project.inProgress.map((task) => (
              <li key={task.id} className="text-sm text-gray-600 dark:text-gray-400">
                <a 
                  href={task.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
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
          <h3 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">
            ⚠️ Blockers ({project.blockers.length})
          </h3>
          <ul className="space-y-1">
            {project.blockers.map((task) => (
              <li key={task.id} className="text-sm text-red-600 dark:text-red-400">
                <a 
                  href={task.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-800 dark:hover:text-red-300"
                >
                  • {task.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics Footer */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500 dark:text-gray-400">Velocity:</span>
            <span className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
              {project.metrics.velocity}/week
            </span>
          </div>
          <div>
            <span className="text-gray-500 dark:text-gray-400">This Week:</span>
            <span className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
              {project.metrics.tasksCompletedThisWeek}
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-500 dark:text-gray-400">Est. Complete:</span>
            <span className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
              {project.metrics.estimatedCompletion}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
