import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// קומפוננטה נוספת שנוספה בסניף main
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
      <div className="container d-flex justify-content-center mt-5">
        <div className="card" style={{ width: '22rem' }}>
          <div className="card-body d-flex flex-column" style={{ height: '500px', overflowY: 'auto' }}>
            <div className="d-flex justify-content-start mb-3">
              <div className="p-2 bg-light border rounded">שלום! איך אני יכול לעזור לך?</div>
            </div>
            <div className="d-flex justify-content-end mb-3">
              <div className="p-2 bg-success text-white rounded">אני רוצה ללמוד אנגלית.</div>
            </div>
            <div className="d-flex justify-content-start mb-3">
              <div className="p-2 bg-light border rounded">הנה דוגמה פשוטה באמצעות Bootstrap.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;