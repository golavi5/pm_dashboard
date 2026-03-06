// Root level 404 page (for non-locale paths)

import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
