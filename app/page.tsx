export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            PM Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Project Management Dashboard for Stakeholders
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Active Projects</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-semibold text-lg">Realtime Agents</h3>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">0%</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Status: Setting up</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p>🚀 Coming soon: Real-time GitHub integration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
