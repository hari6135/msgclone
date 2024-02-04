// App.js or your route configuration file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Chat from './Chat';
import SignUp from './Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
