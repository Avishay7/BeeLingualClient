import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "test",
  email: "test@gmail.com",
  level: "beginner",
  idMorInfoAdmin: "0",
}

const myDetailsSlice = createSlice({
  name: "myDetails",
  initialState,
  reducers: {
    addName: (start, activation) => {
      start.name = activation.payload.name;
    },
    addEmail: (start, activation) => {
      start.email = activation.payload.email;
    },
    addLevel: (start, activation) => {
      start.level = activation.payload.level;
    },
    addIdMorInfoAdmin: (start, activation) => {
      start.idMorInfoAdmin = activation.payload.idMorInfoAdmin;
    },
  }
})

export const { addName, addEmail, addLevel, addIdMorInfoAdmin } = myDetailsSlice.actions
export default myDetailsSlice.reducer