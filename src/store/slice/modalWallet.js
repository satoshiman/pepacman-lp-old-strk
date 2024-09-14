import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const modalWalletSlice = createSlice({
  name: "modalHandler",
  initialState,
  reducers: {
    showModal: (state) => {
      state.value = true;
    },
    hideModal: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showModal, hideModal } = modalWalletSlice.actions;

export default modalWalletSlice.reducer;

//! DO NOT DELETE THIS SAMPLE FILE
//? => to show data on Componen useSelector import from "react-redux"
//? => declare reducer on "store/index.js"
