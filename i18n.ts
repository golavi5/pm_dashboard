// i18n configuration for next-intl

import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the received `locale` is valid
  let validLocale: Locale = 'en';
  
  if (locales.includes(locale as Locale)) {
    validLocale = locale as Locale;
  } else {
    console.warn(`Invalid locale: ${locale}. Defaulting to 'en'`);
  }

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default,
    timeZone: 'GMT-5', // Olavi's timezone
  };
});
