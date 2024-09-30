import React from 'react';

const loginClient = () => {
  return (
    <div className=" container mt-5 border border-dark rounded p-4 d-flex flex-column text-center" style={{ width: '80%', maxWidth: '500px', backgroundColor: 'white' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="text-center">
              <img src="" alt="BeeLengual" />
              <h3>Sign in</h3>
            </div>
            <div className="card-body">
            <div className="mb-4 flex-grow-1">
              <input
                type="email" className="form-control" placeholder="Enter email" style={{ fontSize: '1rem' }} />
            </div>

                <div className="mb-4 flex-grow-1 ">
              <input
                type="Password" className="form-control" placeholder="Password" style={{ fontSize: '1rem' }} />
            </div>
                <div className="mt-3 ">
                  <a href="#">Forgot password?</a>
                  <br />
                  <br />
                </div>
                <div className='text-center'>
                  <button type="button" class="btn btn-primary btn-lg btn-block w-75">Sign In</button>
                </div>
                <br />
                <div className='text-center opacity-50'>
                  <p>--------or sign in with--------</p>
                </div>
                <div className='text-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="100" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>
                </div>
                <div className='text-center'>
                  <a href="#">Create account</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default loginClient;