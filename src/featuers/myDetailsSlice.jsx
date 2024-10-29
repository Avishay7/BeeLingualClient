import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "test",
  email: "test@gmail.com",
  level: "beginner",
  avatar: "pik1",
  idMorInfoAdmin: "0",
  ifShowNav: false,
  isAdmin: false,
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
    addAvatar: (start, activation) => {
      start.avatar = activation.payload.avatar;
    },
    addIdMorInfoAdmin: (start, activation) => {
      start.idMorInfoAdmin = activation.payload.idMorInfoAdmin;
    },
    addIfShowNav: (start, activation) => {
      start.ifShowNav = activation.payload.ifShowNav;
    },
    addIsAdmin: (start, activation) => {
      start.isAdmin = activation.payload.isAdmin;
    },
  }
})

export const {
  addName,
  addEmail,
  addLevel,
  addIdMorInfoAdmin,
  addAvatar,
  addIfShowNav,
  addIsAdmin
} = myDetailsSlice.actions
export default myDetailsSlice.reducer