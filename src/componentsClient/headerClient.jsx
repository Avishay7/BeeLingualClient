import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderClient() {
  let nav = useNavigate()

  const onHomeClick = () => {
    nav("/");
  }
  const onAdmin = () => {
    nav("/Admin");
  }
  const onlogin = () => {
    nav("/Login");
  }
  const onSignUp = () => {
    nav("/SignUp");
  }


  return (

    <div>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onSignUp}>Sign Up</button>
      <button onClick={onlogin}>Login</button>
      <button onClick={onAdmin}>Admin</button>
    </div>
  )
}

export default HeaderClient