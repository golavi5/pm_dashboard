// 404 page for invalid organization slugs in locale

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('organization');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 flex items-center justify-center px-4 transition-colors duration-200">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          {t('notFound')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t('notFoundDesc')}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          {t('backToDashboard')}
        </Link>
      </div>
    </div>
  );
}
