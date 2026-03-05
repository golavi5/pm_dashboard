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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              {error.message || 'Failed to load dashboard data'}
            </p>
            
            <div className="space-y-4">
              <button
                onClick={reset}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Try Again
              </button>
              
              <p className="text-sm text-gray-500">
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
