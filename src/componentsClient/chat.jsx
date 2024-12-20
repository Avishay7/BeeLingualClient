import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_URL, doApiMethod } from '../services/apiService';

// קומפוננטת הצ'אט
function Chat() {
  const myName = useSelector(state => state.myDetailsSlice.name);
  const myLevel = useSelector(state => state.myDetailsSlice.level);
  const myAvatar = useSelector(state => state.myDetailsSlice.avatar);
  let StartTextToSend = `I would like to continue the conversation with you where we left off : 'I said' : 

Hi, you are currently becoming an English teacher for ${myName} at three different levels 1. Beginner 2. Advanced 3. Professional.
${myName} in a ${myLevel} state. Some things you need to do:

1. No matter what language Yossi speaks to you, you will always speak to him only in English

2. Your responses will not be longer than 20 words.

3. Cheer me for my answers with divers cheers every time,
    don't repeat the cheers message after message!.

4. Every time i want to change my level, test me,
    and say if you think i should move to this level.
    either if its to harder level or easier.

5.  If i don't send anything for 30 seconds,
     ask me about that,
     and try to revitalize the conversation.

6. After 3 questions,
    ask me if i want to keep talking
    about the current subject.
    
7.Never send links to other places and websites during a conversation.`;
 

  let FinalTextToSend = "";
  // בנויה הודעה להכניס
  const startChat = "start Chat ...";
  const navigate = useNavigate();
  const location = useLocation();
  const selectedAvatar = location.state?.avatarUrl || myAvatar || 'https://via.placeholder.com/50/0000FF/808080?text=Server';
  // const serverAvatar = 'https://via.placeholder.com/50/0000FF/808080?text=Server';
  const serverAvatar = `src/assets/picture/pic13.png`;

  const [messages, setMessages] = useState([
    { text: `Hello ${myName}, welcome to class, what would you like to talk about today ?`, type: 'you said' },
    // { text: 'on climate warming', type: 'I said' },
    // { text: `good`, type: 'you said' },
    // { text: 'thanks', type: 'I said' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [theTime, setTheTime] = useState("");
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
    setNewMessage("")
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



  // useEffect(() => {
  //   formatTime(chatTime)
  // }, [messages]);


  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    let Time = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return Time;
  };

  const endCallׂׂׂ = () => {
    doApiAddChat()
  };

  const doApiAddChat = async () => {
    const minutes = Math.floor(chatTime / 60);
    const seconds = chatTime % 60;
    let Time = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    let _dataBody = {
      time: Time,
      level: myLevel
    }
    console.log(_dataBody);
    let url = API_URL + "/chats/addChat";
    try {
      let data = await doApiMethod(url, "POST", _dataBody);
      console.log(data.data);
      navigate('/homeClient');
    }
    catch (err) {
      console.log(err.response.data);
      navigate('/homeClient')
    }
  }




  return (
    <div className="pt-3 container d-flex  justify-content-between" style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {/* מקום ללוגו בצד שמאל למעלה */}
      <div className='p-4' style={{ height: '8em', width: "8em", borderRadius: "60px" }}>
        <img style={{ height: '100%', width: "100%", borderRadius: "60px" }} src="src/assets/picture/Logo.jpg" alt="logo" />
      </div>

      <div
        className="card border shadow-lg fade-in-background d-flex flex-column"
        style={{
          width: '90%',
          height: '90%',
          borderRadius: '10px',
          backgroundImage: `url(${backgroundImages[backgroundImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 2s ease-in-out',
          // position: 'relative',
        }}>

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
                    src={`src/assets/picture/${myAvatar?myAvatar :`pic9`}.jpg`}
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

      {/* בועה עם הזמן מחוץ לצ'אט */}
      <div className='p-4'>
        <div
          style={{
            // position: 'absolute',
            // top: '20px',
            // right: '20px',
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
      </div>

      {/* כפתור יציאה קטן יותר למטה בצד שמאל מחוץ לצ'אט */}
      <button
        className="btn btn-secondary m-2 align-self-end"
        style={{ position: 'fixed', bottom: '20px', left: '20px', width: '100px', height: '40px', fontSize: '0.9em' }}
        onClick={() => endCallׂׂׂ()}
      >
        end call
      </button>
    </div>
  );
}

export default Chat;
