import React from 'react'
import { useNavigate } from 'react-router-dom';


function ForgotPass() {

  let nav = useNavigate();

  const toSignIn = () => {
    nav("/login");
  };

  
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: '350px', borderRadius: '10px' }}>
        <h3 className="text-center mb-4">forgot-Paasword</h3>
        <form>
          <div className="form-group mb-3">
            <label>new password</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <label>confirme password</label>
            <input type="password" className="form-control" required />
          </div>
          <button onClick={toSignIn} type="submit" className="btn btn-primary w-100">Continue</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default ForgotPass

