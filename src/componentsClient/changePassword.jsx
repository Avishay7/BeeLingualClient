import React from 'react'

const ChangePassword = () => {

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: '350px', borderRadius: '10px' }}>
        <h3 className="text-center mb-4">ChangePassword</h3>
        <form>
          <div className="form-group mb-3">
            <label>ChangePassword</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <label>new password</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <label>confirme password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Continue</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default ChangePassword
