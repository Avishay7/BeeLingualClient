import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// קומפוננטת הצ'אט
function Chat({ selectedAvatar }) { // נוסיף פרופס לקבלת האוואטר הנבחר
  const serverAvatar = 'https://via.placeholder.com/50/0000FF/808080?text=Server'; // אווטאר לשרת
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
      {/* אזור הצ'אט שתופס 70% מהמסך */}
      <div className="card border shadow-lg" style={{ width: '70%', height: '100%', marginRight: '2%', borderRadius: '10px' }}>
        <div className="card-body d-flex flex-column" style={{ height: '100%', overflowY: 'auto' }}>
          <div className="chat-screen d-flex flex-column">
            {messages.map((msg, index) => (
              <div key={index} className={`d-flex justify-content-${msg.type === 'sent' ? 'end' : 'start'} mb-3`}>
                {msg.type === 'received' && (
                  <img
                    src={serverAvatar}
                    alt="Server Avatar"
                    className="rounded-circle"
                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                  />
                )}
                <div className={`p-2 rounded ${msg.type === 'sent' ? 'bg-primary text-white' : 'bg-light border'}`}>
                  {msg.text}
                </div>
                {msg.type === 'sent' && (
                  <img
                    src={selectedAvatar}
                    alt="User Avatar"
                    className="rounded-circle"
                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginLeft: '10px' }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="input-group mt-3">
            {/* הצגת האוואטר הנבחר */}
            {selectedAvatar && (
              <img
                src={selectedAvatar}
                alt="Selected Avatar"
                className="rounded-circle"
                style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
              />
            )}
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

      {/* אזור החדשות שתופס 30% מהמסך */}
      <div className="news-section" style={{ width: '30%', height: '100%', overflowY: 'auto' }}>
        <iframe
          src="https://news.google.com"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Google News"
        ></iframe>
      </div>
    </div>
  );
}

export default Chat;
