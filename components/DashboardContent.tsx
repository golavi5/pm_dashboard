// Reusable dashboard content component

'use client';

import { useTranslations } from 'next-intl';
import type { DashboardData } from '@/lib/types';
import { ProjectCard } from './ProjectCard';
import { MetricCard } from './MetricCard';

interface DashboardContentProps {
  data: DashboardData;
  title: string;
  subtitle: string;
}

export function DashboardContent({ data, title, subtitle }: DashboardContentProps) {
  const t = useTranslations();
  
  // Calculate aggregate metrics
  const totalTasksThisWeek = data.projects.reduce(
    (sum, p) => sum + p.metrics.tasksCompletedThisWeek,
    0
  );
  
  const avgVelocity = data.projects.length > 0
    ? Math.round(
        data.projects.reduce((sum, p) => sum + p.metrics.velocity, 0) / 
        data.projects.length
      )
    : 0;
  
  const onTimeProjects = data.projects.filter(
    p => p.status === 'on-track'
  ).length;
  
  const onTimePercentage = data.projects.length > 0
    ? Math.round((onTimeProjects / data.projects.length) * 100)
    : 100;
  
  const activeProjects = data.projects.filter(
    p => p.phase !== 'Done'
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('dashboard.lastUpdated')}</p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {new Date(data.lastUpdated).toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Executive Metrics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            📊 {t('dashboard.executiveMetrics')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title={t('metrics.tasksThisWeek')}
              value={totalTasksThisWeek}
              icon="✅"
              trend={totalTasksThisWeek > 10 ? 'up' : 'stable'}
              change={12}
            />
            <MetricCard
              title={t('metrics.avgVelocity')}
              value={`${avgVelocity}${t('metrics.per_week')}`}
              icon="⚡"
              trend="stable"
              change={0}
            />
            <MetricCard
              title={t('metrics.onTime')}
              value={`${onTimePercentage}%`}
              icon="🎯"
              trend={onTimePercentage >= 80 ? 'up' : 'stable'}
              change={5}
            />
            <MetricCard
              title={t('metrics.activeProjects')}
              value={activeProjects}
              icon="🚀"
              subtitle={`${data.projects.length} ${t('metrics.total')}`}
            />
          </div>
        </div>

        {/* Active Projects */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            📋 {t('dashboard.activeProjects')}
          </h2>
          
          {data.projects.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-lg p-8 text-center transition-colors duration-200">
              <p className="text-gray-500 dark:text-gray-400">
                {t('project.noProjects')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
          <p>
            {t('dashboard.poweredBy')}{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              GitHub Projects API
            </a>
            {' • '}
            Built at {new Date(data.lastUpdated).toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
