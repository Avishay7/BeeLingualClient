import React from 'react'

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
            <div className="p-2 bg-success text-white rounded">אני מחפש מידע על עיצוב דף צ'אט.</div>
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

export default Chat
