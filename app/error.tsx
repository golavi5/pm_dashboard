'use client';

// Error boundary for homepage

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700 p-8 text-center transition-colors duration-200">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {error.message || 'Failed to load dashboard data'}
            </p>
            
            <div className="space-y-4">
              <button
                onClick={reset}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
              >
                Try Again
              </button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400">
                If the problem persists, check:
                <ul className="mt-2 space-y-1">
                  <li>• GITHUB_TOKEN environment variable is set</li>
                  <li>• Token has required permissions (project, repo)</li>
                  <li>• Project numbers in config/projects.ts are correct</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
