import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderClient() {
  let nav = useNavigate()

  const onWelcomeClick = () => {
    nav("/");
  }
  const onHomeClick = () => {
    nav("/homeClient");
  }
  const onAdminClick = () => {
    nav("/Admin");
  }
  const onloginClick = () => {
    nav("/Login");
  }
  const onSignUpClick = () => {
    nav("/SignUp");
  }
  const onForgotPassClick = () => {
    nav("/forgotPassClient");
  }
  // const onAvatarClick = () => {
  //   nav("/avatar");
  // }
  const onChatClick = () => {
    nav("/chat");
  }

  const onVarifictionClick = () => {
    nav("/varification");
  }
  const onSubmitClick = () => {
    nav("/submit");
  }
  const onHelpClick = () => {
    nav("/help");
  }
  // const onChangePassClick = () => {
  //   nav("/changePassClint");
  // }
  const onVarificationforgotPass = () => {
    nav("/VarificationforgotPass");
  }

  const onGameClick = () => {
    nav("/Game");
  }
  const onlogout = () => {
    nav("/logout");
  }



  return (
    <div className='p-2 container ' style={{ width: "30em" }}>
      <div className='d-flex justify-content-between '>
        {/* <button onClick={onWelcomeClick}>Welcom</button>
      <button onClick={onSignUpClick}>Sign Up</button>
      <button onClick={onVarifictionClick}>varifiction</button>
      <button onClick={onloginClick}>Login</button>
      <button onClick={onSubmitClick}>submit</button>
      <button onClick={onVarificationforgotPass}>Varification2</button>
      <button onClick={onForgotPassClick}>forgot Pass</button> */}
        {/* <button onClick={onAvatarClick}>avatar</button> */}
        {/* <button onClick={onChatClick}>chat</button> */}
        {/* <button onClick={onChangePassClick}>change pass</button> */}
        <button className='btn btn-info border-black ' onClick={onHomeClick}>Home</button>
        <button className='btn btn-info border-black' onClick={onHelpClick}>help</button>
        {/* <button onClick={onGameClick}>Game</button> */}
        <button className='btn btn-info border-black' onClick={onlogout}>logout</button>
        <button className='btn btn-info border-black' onClick={onAdminClick}>Admin</button>
      </div>
    </div>
  )
}

export default HeaderClient