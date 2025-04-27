import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role);
      } catch (error) {
        console.error('JWT decode error:', error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    }

    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts. Please try again.');
        toast.error('Failed to load posts');
      }
    };
    fetchPosts();
  }, [navigate]);

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600">Blog Posts</h1>
      <p className="mt-2 text-gray-600">Role: {userRole || 'Guest'}</p>
      {posts.length === 0 ? (
        <p className="mt-4 text-gray-600">No posts available.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-bold">{post.title || 'Untitled'}</h2>
              <p>{post.content || 'No content'}</p>
              <p className="text-gray-500">By {post.author?.name || 'Unknown'}</p>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PostList;