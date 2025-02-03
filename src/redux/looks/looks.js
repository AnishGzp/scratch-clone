import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  think: false,
  size: 1,
  displayMessage: false,
};

export const lookSlice = createSlice({
  name: "looks",
  initialState,
  reducers: {
    changeMessage: (state, action) => {
      state.message = action.payload;
    },
    changeThink: (state, action) => {
      state.think = action.payload;
    },
    changeSize: (state, action) => {
      state.size = action.payload;
    },
    changeDisplayMessage: (state, action) => {
      state.displayMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMessage, changeThink, changeSize, changeDisplayMessage } =
  lookSlice.actions;

export default lookSlice.reducer;
