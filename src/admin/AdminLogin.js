import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoPath from '../constants/logoPath';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Ram@email.com' && password === 'Ram123') {
      localStorage.clear();
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex bg-[#071d34]">
      {/* Left side with logo */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8">
        <div className="text-center">
          <img src={logoPath} alt="Yuganter Technologies" className="mx-auto mb-6 w-32 h-32 object-contain" />
          <h1 className="text-3xl font-extrabold">Yuganter Technologies</h1>
          <p className="mt-2 text-lg">Admin Portal</p>
        </div>
      </div>

      {/* Right side – login form */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-[#071d34] p-6 md:p-8 rounded-lg shadow-xl w-full max-w-sm md:max-w-md">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-xs italic mb-4" role="alert">
                {error}
              </p>
            )}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <button
                onClick={() => window.open("https://www.yugantartechnologies.com", "_blank")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Back to Main Site
              </button>
            </div>
          </form>
          {/* <div className="mt-4 text-center">
            <a
              href="https://www.yugantartechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Back to Main Site
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
