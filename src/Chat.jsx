import React, { useState, useEffect } from 'react';
import './Chat.css'; // Import the CSS file
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const location = useLocation();
  const { username } = location.state || {};
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [userProfile, setUserProfile] = useState({
    name: username || 'Your Name',
    profilePhoto: 'https://i.pinimg.com/originals/16/2d/2c/162d2cb212537fe50230b73bb7af57f7.jpg',
  });
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      name: username,
    }));
  }, [username]);

  const getResponse = () => {
    return 'Hi';
  };

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const userMessage = { text: messageInput, user: userProfile.name, type: 'user' };
      setMessages((prevMessages) => [userMessage, ...prevMessages]);
      setMessageInput('');

      setTimeout(() => {
        const botResponse = { text: getResponse(), user: 'ChatBot', type: 'bot' };
        setMessages((prevMessages) => [botResponse, ...prevMessages]);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const openProfileModal = () => {
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  return (
    <div className="chat-body">
      <div className="chat-container">
        <div className="navbar">
          <div className="profile-container">
            <img
              src={userProfile.profilePhoto}
              alt="Profile"
              className="profile-photo"
              onClick={openProfileModal}
            />
            <p className="profile-name">{userProfile.name}</p>
          </div>
          <p className="navbar-text">Chat Room</p>
        </div>

        <div className="message-container">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-wrapper ${msg.type === 'user' ? 'user' : 'bot'}`}
            >
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

      {showProfileModal && (
        <div className="profile-modal">
          <div className="modal-content">
            <span className="close" onClick={closeProfileModal}>&times;</span>
            <img src={userProfile.profilePhoto} alt="Profile" className="modal-profile-photo" />
            <p className="modal-profile-name">{userProfile.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
