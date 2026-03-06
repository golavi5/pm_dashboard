// Landing page with organization selector

import Link from 'next/link';
import { ORGANIZATIONS } from '@/config/organizations';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            PM Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Executive dashboard for real-time project tracking. Select your organization to view detailed project metrics and status.
          </p>
        </div>

        {/* Organization Selector */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Select Your Organization
          </h2>

          {ORGANIZATIONS.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-500 text-lg">
                No organizations configured. Add organizations in{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  config/organizations.ts
                </code>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ORGANIZATIONS.map((org) => (
                <Link
                  key={org.slug}
                  href={`/org/${org.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-8 h-full cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {org.name}
                        </h3>
                        {org.description && (
                          <p className="text-gray-600 mb-4">
                            {org.description}
                          </p>
                        )}
                      </div>
                      <span className="text-3xl">📊</span>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-500 mb-2">
                        Projects: <span className="font-semibold text-gray-900">{org.projects.length}</span>
                      </p>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                        View Dashboard
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Real-Time Tracking
            </h3>
            <p className="text-gray-600">
              See project progress, metrics, and status updates in real-time
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Organization-Specific
            </h3>
            <p className="text-gray-600">
              Each organization sees only their own projects
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600">
              Cached dashboards load in under 2 seconds
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-20">
          <p>
            Powered by{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub Projects API
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
