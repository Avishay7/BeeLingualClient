import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderAdmin() {
  let nav = useNavigate()

  const onHomeClick = () => {
    nav("/");
  }
  const onDashboardAdminClick = () => {
    nav("/admin");
  }
  const onDashboardAdmin222Click = () => {
    nav("/admin/admin222");
  }


  return (
          <div>
            <button onClick={onDashboardAdminClick}>home Admin</button>
            <button onClick={onDashboardAdmin222Click}>admin2</button>
            <button onClick={onHomeClick}>home Client</button>
          </div>
  )
}

export default HeaderAdmin