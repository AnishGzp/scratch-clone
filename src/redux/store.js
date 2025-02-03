import { configureStore } from "@reduxjs/toolkit";
import motionReducer from "./motion/motion";
import looksReducer from "./looks/looks";

export const store = configureStore({
  reducer: {
    motion: motionReducer,
    looks: looksReducer,
  },
});
