import React from 'react';
import { Link } from 'react-router-dom';
import  './help.css'
const PopupChat = () => {

  const stylechat = {
    background: "linear-gradient(45deg, #f8e356, #ff4f8b, #e3b1f6)",
  };

  return (
    <div style={{stylechat}}>
      <div className="me">
        <h2>Help Bot</h2>
        <p>Click on the button at the bottom of this page to open the chat form.</p>
        <p>Note that the button and the form are fixed - they will always be positioned at the bottom of the browser window.</p>
      </div>
      <div className="nav-item text-center">
                  <Link
                    className="nav-link"
                    to="/chat"
                    style={{ color: "black" }}
                  >
                    Chat
                  </Link>
                </div>
    
    </div>
  );
};

export default PopupChat;
