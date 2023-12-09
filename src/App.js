// src/App.js
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserList from './components/Userlist';

import Logo from './assets/Group3.jpg';
import AuthenticatedLogo from './assets/moptro_logo@2x.jpg';

function App() {
  const [view, setView] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = () => {
    // Simulated authentication, replace with your authentication logic
    if (email === 'admin@example.com' && password === 'password') {
      // Successful login
      setAlertMessage('');
      setAuthenticated(true);
      setView('dashboard'); 
    } else if (email === 'admin@example.com') {
      // Incorrect password
      setAlertMessage('Incorrect Password');
    } else {
      // Email mismatch
      setAlertMessage('Please enter valid credentials');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setView('login');
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleLogoClick = () => {
    // Handle logo click event if needed
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>We are electric</h3> 
        <img
          src={authenticated ? AuthenticatedLogo : Logo} // Use AuthenticatedLogo when authenticated
          alt="Logo"
          className="logo"
          onClick={handleLogoClick}
        />
        
        {authenticated && <button onClick={handleLogout}>Logout</button>}
      </header>
      <main>
        {view === 'login' && (
          <Login
            email={email}
            password={password}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onLogin={handleLogin}
          />
        )}
          {view === 'dashboard' && authenticated && <Dashboard onViewChange={handleViewChange} />}
        {view === 'userList' && authenticated && <UserList />}
        {alertMessage && <p style={{ color: 'red' }}>{alertMessage}</p>}
      </main>
    </div>
  );
}

export default App;
