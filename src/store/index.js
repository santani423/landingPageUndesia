import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./mockSlice";

const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});

export default store;
