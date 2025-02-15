import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4500/api/v1/chestguarduser/registerFYP', {
        fullname,
        email,
        password,
      });

      console.log('Registration successful:', response.data);
      setSuccess('Registration successful! You can now login.');
      setError('');
    } catch (err) {
      console.error('Registration error:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#111827] overflow-hidden">
    {/* Full-page Neon Border Effect */}
    <div className="absolute inset-0 before:absolute before:inset-0 before:border-[3px] before:border-purple-500 before:rounded-3xl before:shadow-[0px_0px_30px_6px_rgba(168,85,247,0.7)] before:pointer-events-none"></div>
  
    {/* Register Card */}
    <div className="relative w-[450px] bg-gray-900 rounded-3xl p-8 border-[2px] border-white shadow-[0px_0px_10px_2px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:rounded-3xl before:border-[2px] before:border-purple-500 before:shadow-[0px_0px_20px_5px_rgba(168,85,247,0.7)] before:pointer-events-none">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Register</h1>
  
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-lg font-bold text-white block mb-2">Full Name:</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
            placeholder="Enter your full name"
          />
        </div>
  
        <div>
          <label className="text-lg font-bold text-white block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
            placeholder="Enter your email"
          />
        </div>
  
        <div>
          <label className="text-lg font-bold text-white block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
            placeholder="Enter your password"
          />
        </div>
  
        <button
          type="submit"
          className="w-full text-lg bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Register
        </button>
      </form>
  
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
  
      <div className="flex justify-center mt-6">
        <Link to="/login">
          <button className="text-white underline hover:text-orange-500 transition duration-300">
            Already have an account? Login
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
}

export default Registration;
