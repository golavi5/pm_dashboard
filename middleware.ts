// Middleware for locale detection and routing

import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always', // Always include locale in URL (/en, /es)
});

export const config = {
  // Match all pathnames except for those starting with:
  // - api (API routes)
  // - _next (Next.js internals)
  // - favicon.ico (favicon file)
  // - And files with extensions
  matcher: [
    '/((?!api|_next|favicon.ico|.*\\..*).*)' 
  ],
};
