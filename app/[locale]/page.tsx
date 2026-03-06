// Landing page with organization selector and translations

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ORGANIZATIONS } from '@/config/organizations';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

// Generate static params for all locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
  ];
}

export default function Home() {
  const t = useTranslations('landing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-16">
        {/* Header with Language Switcher */}
        <div className="flex justify-end mb-8">
          <LanguageSwitcher />
        </div>

        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Organization Selector */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {t('selectOrganization')}
          </h2>

          {ORGANIZATIONS.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-lg p-12 text-center transition-colors duration-200">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {t('noOrgsConfigured')}{' '}
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  config/organizations.ts
                </code>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ORGANIZATIONS.map((org) => (
                <Link
                  key={org.slug}
                  href={`org/${org.slug}`}
                  className="group block"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-lg hover:shadow-lg dark:hover:shadow-gray-700 transition-all duration-200 p-8 h-full cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                          {org.name}
                        </h3>
                        {org.description && (
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {org.description}
                          </p>
                        )}
                      </div>
                      <span className="text-3xl">📊</span>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {t('projects')}: <span className="font-semibold text-gray-900 dark:text-gray-100">{org.projects.length}</span>
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                        {t('viewDashboard')}
                        <span className="ml-2">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {t('realTimeTracking')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('realTimeDesc')}
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {t('orgSpecific')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('orgDesc')}
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {t('lightningFast')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('fastDesc')}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-20">
          <p>
            {t('poweredBy')}{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              GitHub Projects API
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
