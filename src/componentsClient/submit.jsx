import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Submit() {

  const[email,setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit =()=>{

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // בדיקת תקינות אימייל , שמירת אימייל תקין , מעבר לדף הבא
    if (emailRegex.test(email)) {

      console.log(email);
      navigate('/varification');

    } else {

      alert('invalid email!')
      console.log(' Eror: invalid email address');
    }
  }
  


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="border border-dark rounded p-4 d-flex flex-column" style={{ width: '80%', maxWidth: '500px', backgroundColor: 'white' }}>
        <h2 className="text-center mb-4" style={{ fontSize: '1.6rem' }}>Reset your password</h2>
        <p className="text-center mb-5" style={{ fontSize: '1rem' }}>Enter your account Email address to receive a security code</p>
        <div className="mb-4 flex-grow-1">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            style={{ fontSize: '1rem' }}
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-block"
                style={{ height: '50px', fontSize: '1rem' }}
                onClick={handleSubmit}>
                  Submit
        </button>
      </div>
    </div>
  );
}

export default Submit
