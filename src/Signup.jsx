import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Dummy authentication logic, replace with your actual authentication logic
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      // Successful sign-up
      toast.success(`Welcome, ${name}!`, {
        position: "top-right",
        autoClose: 500,
      });
      navigate('/Chat', { state: { username: name } });
    } else {
      // Failed sign-up
      toast.error('Invalid input. Please fill in all fields.', {
        position: "bottom-right",
        autoClose: 50,
      });
    }
  };

  return (
    <div className="signbody">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="input-group">
          <input
            type="text"
            className='user'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
          />
          <input
            type="email"
            className='user'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            type="password"
            className='user'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>
        <div className="button-group">
          <button className="sign" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
    </div>
  );
};

export default SignUp;
