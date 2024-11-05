import React from 'react'
import { useNavigate } from 'react-router-dom';
import { addIfShowNav } from '../featuers/myDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';

function HeaderClient() {
  let nav = useNavigate()
  const dispatch = useDispatch();
  const IfShowNav = useSelector(state => state.myDetailsSlice.ifShowNav);
  const IsAdmin = useSelector(state => state.myDetailsSlice.isAdmin);

  // const onWelcomeClick = () => {
  //   nav("/");
  // }

  // const onloginClick = () => {
  //   nav("/Login");
  // }
  // const onSignUpClick = () => {
  //   nav("/SignUp");
  // }
  // const onForgotPassClick = () => {
  //   nav("/forgotPassClient");
  // }
  // const onAvatarClick = () => {
  //   nav("/avatar");
  // }
  // const onChatClick = () => {
  //   nav("/chat");
  // }

  // const onVarifictionClick = () => {
  //   nav("/varification");
  // }
  // const onSubmitClick = () => {
  //   nav("/submit");
  // }

  // const onChangePassClick = () => {
  //   nav("/changePassClint");
  // }
  // const onVarificationforgotPass = () => {
  //   nav("/VarificationforgotPass");
  // }

  // const onGameClick = () => {
  //   nav("/Game");
  // }

  const onWelcomeClick = () => {
    nav("/");
  }
  const onHomeClick = () => {
    nav("/homeClient");
  }
  const onHelpClick = () => {
    nav("/help");
  }
  const onlogout = () => {
    dispatch(addIfShowNav({ ifShowNav: false }));
    nav("/logout");
  }
  const onAdminClick = () => {
    nav("/Admin");
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
        {IfShowNav ? " " :
          <button className='btn btn-info border-black ' onClick={onWelcomeClick}>Welcome</button>
        }
        {IfShowNav ?
          <button className='btn btn-info border-black ' onClick={onHomeClick}>Home</button>
          : ""}
        <button className='btn btn-info border-black' onClick={onHelpClick}>Help</button>

        {IfShowNav ?
          <button className='btn btn-info border-black' onClick={onlogout}>Logout</button>
          : ""}

        {IfShowNav && IsAdmin ?
          <button className='btn btn-info border-black' onClick={onAdminClick}>Admin</button>
          : ""}


        {/* <button className='btn btn-info border-black ' onClick={onHomeClick}>Home</button> */}
        {/* <button onClick={onGameClick}>Game</button> */}
      </div>
    </div>
  )
}

export default HeaderClient