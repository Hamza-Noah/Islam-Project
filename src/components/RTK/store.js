import { configureStore } from "@reduxjs/toolkit";
import changeTheme from "./slice";

export const store = configureStore({
  reducer: {
    changeTheme: changeTheme,
  },
});
