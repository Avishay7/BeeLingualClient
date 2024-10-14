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
  const onAvatarClick = () => {
    nav("/avatar");
  }
  const onChatClick = () => {
    nav("/chat");
  }
  const onSettingsClick = () => {
    nav("/settings");
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

    <div>
      <button onClick={onWelcomeClick}>Welcom</button>
      <button onClick={onSignUpClick}>Sign Up</button>
      <button onClick={onVarifictionClick}>varifiction</button>
      <button onClick={onloginClick}>Login</button>
      <button onClick={onSubmitClick}>submit</button>
      <button onClick={onVarificationforgotPass}>Varification2</button>
      <button onClick={onForgotPassClick}>forgot Pass</button>
      <button onClick={onlogout}>logout</button> 
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onAvatarClick}>avatar</button>
      <button onClick={onChatClick}>chat</button>
      <button onClick={onSettingsClick}>settings</button>
      {/* <button onClick={onChangePassClick}>change pass</button> */}
      <button onClick={onHelpClick}>help</button>
      <button onClick={onGameClick}>Game</button>
      <button onClick={onAdminClick}>Admin</button>
    </div>
  )
}

export default HeaderClient