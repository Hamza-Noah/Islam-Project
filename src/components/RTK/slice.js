import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkMode: "purple" };

export const darkMode = createSlice({
  name: "dark mode",
  initialState,
  reducers: {
    changeThemeToDark: (state) => {
       return {...state, darkMode: "dark"};
    },
  },
});

export const purpleMode = createSlice({
  name: "purple mode",
  initialState,
  reducers: {
    changeThemeTopurple: (state) => {
       return {...state, darkMode: "purple"};
    },
  },
});

export const whiteMode = createSlice({
  name: "white mode",
  initialState,
  reducers: {
    changeThemeToWhite: (state) => {
       return {...state, darkMode: "white"};
    },
  },
});

export const { changeThemeToDark } = darkMode.actions;
export const { changeThemeTopurple } = purpleMode.actions;
export const { changeThemeToLight } = whiteMode.actions;

export default darkMode.reducer