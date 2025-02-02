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
    <>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <Link to='/login'><button>Login</button></Link>
    </>
  );
}

export default Registration;
