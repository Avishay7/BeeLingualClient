import React from 'react'
import { useSelector } from 'react-redux';

const Varification = () => {
  const myName = useSelector(state => state.myDetailsSlice.email);
  const email = myName;

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: '350px', borderRadius: '10px' }}>
        <h3 className="text-center mb-4">Check your Inbox</h3>
        <p className="text-center mb-4">
        Enter the 6-digit security code we send to  : <strong>{email}</strong>
        </p>
        <form>
          <div className="d-flex justify-content-center mb-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                type="text"
                key={index}
                maxLength="1"
                className="form-control text-center mx-1"
                style={{
                  width: '50px',
                  height: '50px',
                  fontSize: '24px',
                  borderRadius: '5px',
                  border: '1px solid #ced4da',
                  boxShadow: 'none'
                }}
              />
            ))}
          </div>
          <button type="submit" className="btn btn-primary w-100">Verify</button>
        </form>
      </div>
    </div>
  );
}

export default Varification
