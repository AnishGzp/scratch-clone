import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moveX: 0,
  moveY: 0,
  rotationAdd: 0,
};

export const motionSlice = createSlice({
  name: "motion",
  initialState,
  reducers: {
    changeX: (state, action) => {
      state.moveX = action.payload;
    },
    changeY: (state, action) => {
      state.moveY = action.payload;
    },
    rotate: (state, action) => {
      state.rotationAdd = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeX, changeY, rotate } = motionSlice.actions;

export default motionSlice.reducer;
