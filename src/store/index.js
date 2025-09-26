import { configureStore } from "@reduxjs/toolkit";
import mockReducer from "./mockSlice";

const store = configureStore({
  reducer: {
    mock: mockReducer,
  },
});

export default store;
