export default function Landing() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Dashboard</h1>
        <p className="mt-4 text-lg text-gray-600">Select a module to continue</p>
      </header>
      
      <div className="flex flex-col items-center justify-center max-w-4xl gap-8 mx-auto md:flex-row">
        {/* Card 1 */}
        <div className="w-full max-w-sm p-6 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl">
          <div className="w-12 h-12 mb-4 bg-indigo-100 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-indigo-600">1</span>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Analytics Module</h2>
          <p className="mb-6 text-gray-600">Access primary features and view real-time data metrics.</p>
          <button className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
            Open Analytics
          </button>
        </div>
        
        {/* Card 2 */}
        <div className="w-full max-w-sm p-6 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl">
          <div className="w-12 h-12 mb-4 bg-teal-100 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-teal-600">2</span>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Settings Module</h2>
          <p className="mb-6 text-gray-600">Manage application configuration and user profiles.</p>
          <button className="w-full px-4 py-2 font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors">
            Open Settings
          </button>
        </div>
      </div>
    </div>
  );
}