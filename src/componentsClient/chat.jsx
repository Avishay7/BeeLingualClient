import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_URL, doApiMethod } from '../services/apiService';

// קומפוננטת הצ'אט
function Chat() {
  const myName = useSelector(state => state.myDetailsSlice.name);
  const myAvatar = useSelector(state => state.myDetailsSlice.avatar);
  let StartTextToSend = "I would like to continue the conversation with you where we left off :";
  let FinalTextToSend = "";
  // בנויה הודעה להכניס
  const startChat = "start Chat ...";
  const navigate = useNavigate();
  const location = useLocation();
  const selectedAvatar = location.state?.avatarUrl || myAvatar || 'https://via.placeholder.com/50/0000FF/808080?text=Server';
  const serverAvatar = 'https://via.placeholder.com/50/0000FF/808080?text=Server';

  const [messages, setMessages] = useState([
    { text: `Hello ${myName}, welcome to class, what would you like to talk about today ?`, type: 'you said' },
    // { text: 'on climate warming', type: 'I said' },
    // { text: `good`, type: 'you said' },
    // { text: 'thanks', type: 'I said' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [chatTime, setChatTime] = useState(0);
  const chatContainerRef = useRef(null);
  const backgroundImages = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
    'https://images.unsplash.com/photo-1552083375-7216e0cded77',
    'https://images.unsplash.com/photo-1603993097397-89c963e325c7',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1547118004-f8c4f32b729c',
    'https://images.unsplash.com/photo-1519608487953-e999c86e7455',
    'https://images.unsplash.com/photo-1499952127939-9bbf5af6b1c9',
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prev) => (prev + 1) % backgroundImages.length);
    }, 100000);
    return () => clearInterval(interval);
  }, []);


  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, type: 'I said' }]);
    }
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].type === 'I said') {
      formatConversation()
    }
  }, [messages]);


  const formatConversation = () => {
    let conversation = messages
      .map(item => {
        if (item.type === 'you said') {
          return `you said: ${item.text}`;
        } else if (item.type === 'I said') {
          return `I said: ${item.text}`;
        }
        return '';
      }).join(' ');
    let TextToSend = StartTextToSend + conversation + ", Now it's your turn";
    console.log(conversation);
    console.log(TextToSend);
    doApi(TextToSend);
  };


  const doApi = async (_data) => {
    let _dataBody = {
      message: _data
    }
    
      console.log(_dataBody);
      let url = API_URL + "/chats";
      try {
        let data = await doApiMethod(url, "POST", _dataBody);
        console.log(data.data.response);
        const timeout = setTimeout(() => {
          setMessages([...messages, { text: data.data.response, type: 'you said' }]);
        }, 1000);
        return () => clearTimeout(timeout);
      }
      catch (err) {
        console.log(err.response.data);
      }
  }


  useEffect(() => {
    const timer = setInterval(() => {
      setChatTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);




  // const a = () => {}

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="d-flex flex-column align-items-center" style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {/* מקום ללוגו בצד שמאל למעלה */}
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <img src="https://via.placeholder.com/100x50?text=Logo" alt="Logo" />
      </div>

      {/* בועה עם הזמן מחוץ לצ'אט */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
          textAlign: 'center',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.2em',
        }}
      >
        {formatTime(chatTime)}
      </div>

      <div
        className="card border shadow-lg fade-in-background d-flex flex-column"
        style={{
          width: '80%',
          height: '80%',
          borderRadius: '10px',
          backgroundImage: `url(${backgroundImages[backgroundImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 2s ease-in-out',
          position: 'relative',
        }}
      >
        <div className="card-body d-flex flex-column flex-grow-1 overflow-auto" ref={chatContainerRef}>
          <div className="chat-screen d-flex flex-column flex-grow-1">
            {messages.map((msg, index) => (
              <div key={index} className={`d-flex justify-content-${msg.type === 'I said' ? 'end' : 'start'} mb-3`}>
                {msg.type === 'you said' && (
                  <img
                    src={serverAvatar}
                    alt="Server Avatar"
                    className="rounded-circle"
                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                  />
                )}
                <div className={`p-2 rounded ${msg.type === 'I said' ? 'bg-primary text-white' : 'bg-light border'}`}>
                  {msg.text}
                </div>
                {msg.type === 'I said' && (
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
        </div>

        {/* אזור הכתיבה */}
        <div className="input-group mt-3 p-3 bg-light" style={{ borderTop: '1px solid #ccc' }}>
          {/* {selectedAvatar && (
            <img
              src={selectedAvatar}
              alt="Selected Avatar"
              className="rounded-circle"
              style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
            />
          )} */}
          <input
            type="text"
            className="form-control"
            placeholder="כתוב הודעה..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="btn btn-primary" onClick={sendMessage}>שלח</button>
        </div>
      </div>

      {/* כפתור יציאה קטן יותר למטה בצד שמאל מחוץ לצ'אט */}
      <button
        className="btn btn-secondary m-2 align-self-end"
        style={{ position: 'fixed', bottom: '20px', left: '20px', width: '100px', height: '40px', fontSize: '0.9em' }}
        onClick={() => navigate('/homeClient')}
      >
        חזרה לדף הבית
      </button>
    </div>
  );
}

export default Chat;
