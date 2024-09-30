import React from 'react'

const ChangePassword = () => {
  
    return (
      <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-sm" style={{ width: '350px', borderRadius: '10px' }}>
          <h3 className="text-center mb-4">שינוי סיסמה</h3>
          <form>
            <div className="form-group mb-3">
              <label>old password</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="form-group mb-3">
              <label>new password</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="form-group mb-3">
              <label>confirm password</label>
              <input type="password" className="form-control" required />
            </div>
          </form>
        </div>
      </div>
      </>
    );  
}

export default ChangePassword
