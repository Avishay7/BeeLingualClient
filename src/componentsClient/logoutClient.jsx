import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from "../services/localService"
import {  addIfShowNav } from '../featuers/myDetailsSlice'
import { useDispatch } from 'react-redux'

function LogoutClient() {
  let nav = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => { 
    if (confirm("Are you sure you want to log out?")) {
      deleteToken();
      dispatch(addIfShowNav({ ifShowNav: true }));
      nav("/");
      window.location.reload();
    }
    nav("/homeClient");
  }, [])

  return (
    <></>
  )
}

export default LogoutClient