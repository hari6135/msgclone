import React, { useState, useEffect } from 'react';
import './Chat.css'; // Import the CSS file
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const location = useLocation();
  const { username } = location.state || {};
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [userProfile, setUserProfile] = useState({
    name: username || 'Your Name', // Use the passed username or default to 'Your Name'
    profilePhoto: 'https://i.pinimg.com/originals/16/2d/2c/162d2cb212537fe50230b73bb7af57f7.jpg',
  });

  useEffect(() => {
    // Use effect to update the username when it changes
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      name: username,
    }));
  }, [username]);

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      setMessages([{ text: messageInput, user: userProfile.name }, ...messages]);
      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-body">
      <div className="chat-container">
        {/* Navbar with Profile Photo and Name */}
        <div className="navbar">
          <div className="profile-container">
            <img
              src={userProfile.profilePhoto}
              alt="Profile"
              className="profile-photo"
            />
            <p className="profile-name">{userProfile.name}</p>
          </div>
          <p className="navbar-text">Chat Room</p>
        </div>

        <div className="message-container">
          {messages.map((msg, index) => (
            <div key={index} className="message-wrapper">
              <strong className="message-text">{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="message-input"
          />
          <button onClick={sendMessage} className="send-button">
            {/* Add an icon or text inside the button if needed */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
