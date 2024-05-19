import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userName = '', password = '' } = location.state || {};

  const isUserLoggedIn = userName && password;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isUserLoggedIn ? (
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Welcome, {userName}!</h2>
          <p>You have successfully logged in.</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 mt-4 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p>User information is missing. Please login again.</p>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
          >
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;


