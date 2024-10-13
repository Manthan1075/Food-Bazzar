
import React, { useState } from 'react';
import './Form.css';
import { Navigate, NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (identifier && password) {
      alert('Login successful!');
    } else {
      alert('Please fill in both fields.');
    }
  };

  const handleForgotPassword = () => {
    alert('Redirecting to password recovery.');
  };

  const handleSignup = () => {
    Navigate('/signup');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Food Bazar Login</h2>
        <div className="input-group">
          <label htmlFor="identifier">Phone or Email</label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="options">
          <button type="button"  onClick={handleSignup}>
            Create Acc?Login
          </button>
          <button type="submit"> <NavLink to="/">Sign In</NavLink></button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
