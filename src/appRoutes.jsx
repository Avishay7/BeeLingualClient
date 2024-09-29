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
import ForgotPass from './componentsClient/forgotPass';
import Varification from './componentsClient/varification';
import Avatar from './componentsClient/avatar';
import Chat from './componentsClient/chat';
import Settings from './componentsClient/settings';
import ChangePassword from './componentsClient/changePassword';
import Submit from './componentsClient/submit';
import Help from './componentsClient/help';

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
          <Route path="/login" element={<LogInClient />} />
          <Route path="/signup" element={<SignUpClient />} />
          <Route path="varification" element={<Varification/>}/>
          <Route path="/homeClient" element={<HomeClient />} /> 
          <Route path="/avatar" element={<Avatar/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/>
          <Route path="/submit" element={<Submit />} />
          <Route path="/forgotPassClient" element={<ForgotPass />} />
          <Route path="/help" element={<Help/>} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes