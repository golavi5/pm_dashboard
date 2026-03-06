// Loading skeleton for project cards

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700 p-6 animate-pulse transition-colors duration-200">
      {/* Header */}
      <div className="mb-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      </div>

      {/* Status Badge */}
      <div className="mb-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
      </div>

      {/* List Items */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
      </div>

      {/* Footer */}
      <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>

        {/* Metrics Skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-lg p-4 animate-pulse transition-colors duration-200">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Skeleton */}
        <div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
