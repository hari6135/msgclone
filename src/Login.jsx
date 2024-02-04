import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = () => {
    // Authentication logic
    if (
      (username.trim() === 'hari' && password.trim() === 'Hari@2504') ||
      (username.trim() === 'user' && password.trim() === 'user123')
    ) {
      // Pass the username to the Chat component
      nav('/Chat', { state: { username } });
      toast.success(`Welcome, ${username}!`, {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      toast.error('Invalid username or password. Please try again.', {
        position: "bottom-right",
        autoClose: 5000,
      });
    }
  };

  const handleSignUp = () => {
    nav('/sign');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div>
      <div className="logbody">
        <div className="login-container">
          <h2>Login</h2>
          <div className="input-group">
            <input
              type="text"
              className="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              className="user"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onKeyPress={handleKeyPress} 
            />
          </div>
          <div className="button-group">
            <button className="log" onClick={handleLogin}>
              Login
            </button>
            <button className="sign" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
        transition="Slide"
      />
    </div>
  );
};

export default Login;
