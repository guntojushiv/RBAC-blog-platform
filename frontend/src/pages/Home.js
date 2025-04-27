import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role);
      } catch (error) {
        console.error('JWT decode error:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the Blog Platform</h1>
        <p className="mt-4 text-gray-600">
          {userRole ? `Logged in as: ${userRole}` : 'Share your thoughts and read others\' posts.'}
        </p>
        <div className="mt-6 space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate('/posts')}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            View Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;