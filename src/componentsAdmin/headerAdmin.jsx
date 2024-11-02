import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderAdmin() {
  let nav = useNavigate()

  const onHomeClick = () => {
    nav("/homeClient");
  }
  const onDashboardAdminClick = () => {
    nav("/admin");
  }


  return (
    <div className='p-2 container ' style={{ width: "30em" }}>
      <div className='d-flex justify-content-between '>
        <button className='btn btn-info border-black ' onClick={onDashboardAdminClick}>home Admin</button>
        <button className='btn btn-info border-black ' onClick={onHomeClick}>home Client</button>
      </div>
    </div>
  )
}

export default HeaderAdmin