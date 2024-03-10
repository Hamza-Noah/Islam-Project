import { configureStore } from "@reduxjs/toolkit";
import changeTheme from "./slice";
import { darkMode, purpleMode, whiteMode } from "./slice";

export const store = configureStore({
  reducer: {
    changeTheme: changeTheme,
    darkMode: darkMode.reducer,
    purpleMode: purpleMode.reducer,
    whiteMode: whiteMode.reducer,
  },
});
