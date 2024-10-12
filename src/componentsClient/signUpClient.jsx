import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmail, addName } from '../featuers/myDetailsSlice';
import { API_URL, doApiMethod } from '../services/apiService';


function SignUpClient() {
  let nav = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubForm = (data) => {
    data.email = data.email.toLowerCase();
    doApi(data)
  };

  const doApi = async (_dataBody) => {
    console.log(_dataBody);
    let url = API_URL + "/users";
    try {
      let resp = await doApiMethod(url, "POST", _dataBody);
      if (resp.data._id) {
        dispatch(addName({ name: _dataBody.FirstName }));
        dispatch(addEmail({ email: _dataBody.email }));
        console.log("You sign up");
        nav("/varification");
      }
    }
    catch (err) {
      nav("/varification");
      console.log(err.response.data);
    }
  }

  let firstNameRef = register("FirstName", { required: true, minLength: 2, maxLength: 20 });
  let lastNameRef = register("LastName", { required: true, minLength: 2, maxLength: 20 });
  let DisplayNameRef = register("DisplayName", { required: true, minLength: 2, maxLength: 20 });
  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  });
  let passwordRef = register("password", { required: true, minLength: 4, maxLength: 20 });

  const toLogin = () => {
    nav("/login");
  };

  return (
    <>
      <div className=" container mt-5 shadow-lg p-4 d-flex flex-column text-center" style={{ width: '80%', maxWidth: '500px', backgroundColor: 'white' }}>
        <div className="row justify-content-center">
          {/* <img src="" alt="" /> */}
          <h3 className='m-2'>Create Account</h3>

          <form onSubmit={handleSubmit(onSubForm)} className="text-center">

            <div className="m-2 flex-grow-1 text-start">
              <input {...firstNameRef} type="first Name" className="form-control" placeholder="first Name" style={{ fontSize: '1rem' }} />
              {errors.FirstName ? <small className='text-danger '>Enter valid first Name, min 2 chars max 20</small> : ""}
            </div>

            <div className="m-2 flex-grow-1 text-start">
              <input {...lastNameRef} type="last Name" className="form-control" placeholder="last Name" style={{ fontSize: '1rem' }} />
              {errors.LastName ? <small className='text-danger '>Enter valid last Name, min 2 chars max 20</small> : ""}
            </div>

            <div className="m-2 flex-grow-1 text-start">
              <input {...DisplayNameRef} type="Display Name" className="form-control" placeholder="Display Name" style={{ fontSize: '1rem' }} />
              {errors.DisplayName ? <small className='text-danger '>Enter valid Display Name, min 2 chars max 20</small> : ""}
            </div>

            <div className="m-2 flex-grow-1 text-start">
              <input {...emailRef} type="email" className="form-control" placeholder="Enter email" style={{ fontSize: '1rem' }} />
              {errors.email ? <small className='text-danger '>* Email invalid</small> : ""}
            </div>

            <div className="m-2 flex-grow-1 text-start">
              <input {...passwordRef} type="Password" className="form-control" placeholder="Password" style={{ fontSize: '1rem' }} />
              {errors.password ? <small className='text-danger'>* Enter valid password, min 3 chars</small> : ""}
            </div>

            <div className='m-2 text-center'>
              <button className="btn btn-primary btn-lg w-75">Sign Up</button>
            </div>

          </form>
          {/* <div className='text-center opacity-50'>
              <p>--------or sign up with--------</p>
            </div>
            <div className='text-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
            </div> */}

          <div className='m-2 text-center'>
            <p>You already have an account?</p>
            <p onClick={toLogin} className='text-info'>Sign in</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default SignUpClient