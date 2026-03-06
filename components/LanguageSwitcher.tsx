// Language switcher component

'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');
  const [mounted, setMounted] = useState(false);

  // Ensure component only renders after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLanguage = (newLocale: string) => {
    // Replace locale in pathname
    // pathname format: /en/... or /es/...
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace the locale
    const newPath = segments.join('/');
    router.push(newPath);
  };

  if (!mounted) {
    return (
      <div className="w-16 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  return (
    <select
      value={locale}
      onChange={(e) => switchLanguage(e.target.value)}
      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      aria-label="Select language"
    >
      <option value="en">🇺🇸 {t('english')}</option>
      <option value="es">🇪🇸 {t('spanish')}</option>
    </select>
  );
}
