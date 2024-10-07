import React from 'react';
import './App.css'
import AppRoutes from "./appRoutes";
import  myDetailsSlice from "./featuers/myDetailsSlice";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const myStore = configureStore({
  reducer: {
    myDetailsSlice
  }
})

function App() {

  return (
    <Provider store={myStore}>
      <AppRoutes />
    </Provider>
  )
}

export default App
