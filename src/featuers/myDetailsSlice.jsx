import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"test",
    email:"test@gmail.com",
  }

  const myDetailsSlice = createSlice({
    name:"myDetails",
    initialState,
    reducers:{
       addName:(start,activation)=>{
         start.name = activation.payload.name ;
       },
       addEmail:(start,activation)=>{
         start.email = activation.payload.email ;
       }
    }
})  

export const {addName ,addEmail}  = myDetailsSlice.actions 
export default myDetailsSlice.reducer