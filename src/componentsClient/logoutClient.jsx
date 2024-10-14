import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from "../services/localService"

function LogoutClient() {
  let nav = useNavigate()

  useEffect(() => { 
    if (confirm("Are you sure you want to log out?")) {
      deleteToken();
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