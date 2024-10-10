import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Submit() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
    if (emailRegex.test(email)) {
      setEmailError(''); 
      console.log(email);
      navigate('/VarificationforgotPass');
    } else {
      setEmailError('Invalid email address');
      console.log('Error: Invalid email address');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div
        className="border border-dark rounded p-4 d-flex flex-column"
        style={{ width: '80%', maxWidth: '500px', backgroundColor: 'white' }}
      >
        <h2 className="text-center mb-4" style={{ fontSize: '1.6rem' }}>Reset your password</h2>
        <p className="text-center mb-5" style={{ fontSize: '1rem' }}>
          Enter your account Email address to receive a security code
        </p>
        <div className="mb-4 flex-grow-1">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            style={{ fontSize: '1rem' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email" 
          />
          {emailError && <small className="text-danger">{emailError}</small>} 
        </div>
        <button
          className="btn btn-primary btn-block"
          style={{ height: '50px', fontSize: '1rem' }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Submit;
