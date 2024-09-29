import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from './componentsAdmin/layoutAdmin'
import LayoutClient from './componentsClient/layoutClient'
import LogInClient from './componentsClient/logInClient'
import SignUpClient from './componentsClient/signUpClient'
import Page404 from './componentsClient/Page404'
import Welcome from './componentsClient/welcome';
import HomeClient from './componentsClient/homeClient';
import DashboardAdmin from './componentsAdmin/dashboardAdmin';
import DashboardAdmin222 from './componentsAdmin/dashboardAdmin222';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardAdmin />} />
          <Route path='/admin/admin222' element={<DashboardAdmin222 />} />
        </Route>

        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Welcome />} />
          <Route path="/signup" element={<SignUpClient />} />
          <Route path="/login" element={<LogInClient />} />
          <Route path="/homeClient" element={<HomeClient />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes