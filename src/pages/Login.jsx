import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, authenticate here before navigating
    navigate('/landing');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Log In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <button 
            onClick={() => navigate('/signup')}
            className="mt-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            Go to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}