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
    nav("/verification");
  }
  const onSubmitClick = () => {
    nav("/submit");
  }
  const onHelpClick = () => {
    nav("/help");
  }
  const onChangePassClick = () => {
    nav("/changePassClient");
  }



  return (

    <div>
      <button onClick={onWelcomeClick}>Welcom</button>
      <button onClick={onloginClick}>Login</button>
      <button onClick={onSignUpClick}>Sign Up</button>
      <button onClick={onVarifictionClick}>Verification</button>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onAvatarClick}>avatar</button>
      <button onClick={onChatClick}>chat</button>
      <button onClick={onSettingsClick}>settings</button>
      <button onClick={onChangePassClick}>change pass</button>
      <button onClick={onSubmitClick}>submit</button>
      <button onClick={onForgotPassClick}>forgot Pass</button>
      <button onClick={onHelpClick}>help</button>
      <button onClick={onAdminClick}>Admin</button> 
    </div>
  )
}

export default HeaderClient