// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ email, password, onEmailChange, onPasswordChange, onLogin }) => {
  const [alertMessage, setAlertMessage] = useState('');


  return (
    <div>
      <h1>Login</h1>
      {alertMessage && <p style={{ color: 'red' }}>{alertMessage}</p>}
      <input
        type="text" // Updated from 'email'
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
