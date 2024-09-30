import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatApp = () => {
  return (
    
    <div className="container d-flex justify-content-center">
      <div className="phone-frame">
        <div className="chat-screen d-flex flex-column">
          <div className="chat-bubble received align-self-start">שלום! איך אני יכול לעזור לך?</div>
          <div className="chat-bubble sent align-self-end">אני מחפש מידע על עיצוב דף צ'אט.</div>
          <div className="chat-bubble received align-self-start">הנה דוגמה פשוטה באמצעות Bootstrap.</div>
        </div>
      </div>
    </div>
  );
}




function Chat() {
  return (
    <div>
      
    </div>
  )
}

export default Chat
