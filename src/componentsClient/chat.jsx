import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// קומפוננטת הצ'אט
function Chat() {
  const [messages, setMessages] = useState([
    { text: 'שלום! איך אני יכול לעזור לך?', type: 'received' },
    { text: 'אני רוצה לדבר איתך באנגלית.', type: 'sent' },
    { text: 'בשמחה בוא נתחיל.', type: 'received' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // פונקציה לשליחת הודעה חדשה
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, type: 'sent' }]);
      setNewMessage(''); // ניקוי שדה הטקסט
    }
  };

  // שימוש ב-useEffect כדי לשלוח תגובה אוטומטית
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].type === 'sent') {
      const autoReply = 'זו תגובה אוטומטית';
      const timeout = setTimeout(() => {
        setMessages([...messages, { text: autoReply, type: 'received' }]);
      }, 1000); // תגובה אוטומטית לאחר שניה אחת

      return () => clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div className="d-flex" style={{ height: '100vh', width: '100%' }}>
      <div className="card" style={{ width: '50%', height: '100%' }}>
        <div className="card-body d-flex flex-column" style={{ height: '100%', overflowY: 'auto' }}>
          <div className="chat-screen d-flex flex-column">
            {messages.map((msg, index) => (
              <div key={index} className={`d-flex justify-content-${msg.type === 'sent' ? 'end' : 'start'} mb-3`}>
                <div className={`p-2 rounded ${msg.type === 'sent' ? 'bg-primary text-white' : 'bg-light border'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="כתוב הודעה..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
            />
            <button className="btn btn-primary" onClick={sendMessage}>שלח</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ייצוא קומפוננטת Chat
export default Chat;