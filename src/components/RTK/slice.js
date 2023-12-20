import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkMode: true };

export const darkMode = createSlice({
  name: "dark mode",
  initialState,
  reducers: {
    changeThemeToDark: (state) => {
       return {...state, darkMode: !state.darkMode};
    },
  },
});

export const { changeThemeToDark } = darkMode.actions;

export default darkMode.reducer