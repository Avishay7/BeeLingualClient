import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod } from '../services/apiService';


function ForgotPass() {
  const navigate = useNavigate();
  const myEmail = useSelector(state => state.myDetailsSlice.email);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    const errors = {};
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Send password to server
    doApi()
  };
  const doApi = async () => {
    let url = API_URL + "/users/changePass";
    try {
      let resp = await doApiMethod(url, "PATCH", { email: myEmail, password });
      if (resp.data.status = 200) {
        console.log('Password reset successfully');
        navigate('/login');
      }
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card p-4 shadow-lg" style={{ width: '350px', borderRadius: '10px' }}>
          <h3 className="text-center mb-4">forgot-Paasword</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>new password</label>
              <input value={password} onChange={handlePasswordChange} type="password" className="form-control" required />
              {errors.password && <small className="text-danger">{errors.password}</small>}
            </div>

            <div className="form-group mb-3">
              <label>confirme password</label>
              <input value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" className="form-control" required />
              {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
            </div>
            <button type="submit" className="btn btn-primary w-100">Continue</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPass

