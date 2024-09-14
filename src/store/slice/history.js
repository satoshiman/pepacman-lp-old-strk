import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "transactions",
  initialState: [
    // {
    //   hash: "0x4b00ed4fbfbc336222da4473572d126365d28eb4173b53ee3e79e91c803710a1",
    //   status: "error",
    //   type: "mint",
    //   message: 1,
    //   close: false,
    // },
    // {
    //   hash: "0x4b00ed4fbfbc336222da4473572d126365d28eb4173b53ee3e79e91c803710a2",
    //   status: "pending",
    //   type: "mint",
    //   message: 503,
    //   close: false,
    // },
    // {
    //   hash: "0x4b00ed4fbfbc336222da4473572d126365d28eb4173b53ee3e79e91c803710a3",
    //   status: "success",
    //   type: "mint",
    //   message: 17271,
    //   close: false,
    // },
  ],
  reducers: {
    addTx: (state, action) => {
      state.push({
        hash: action.payload.hash,
        status: action.payload.status,
        type: action.payload.type,
        message: action.payload.message,
        close: false,
      });
    },
    updateStatus: (state, action) => {
      // console.log("update", action.payload);
      return state.map((item) => {
        if (item.hash !== action.payload.hash) {
          // keep it as-is
          return item;
        }
        // return an updated value
        return {
          ...item,
          status: action.payload.status,
        };
      });
    },
    closeToast: (state, action) => {
      // console.log("close", action.payload);
      return state.map((item) => {
        if (item.hash !== action.payload.hash) {
          // keep it as-is
          return item;
        }
        // return an updated value
        return {
          ...item,
          close: action.payload.close,
        };
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTx, updateStatus, closeToast } = historySlice.actions;

export default historySlice.reducer;

//! DO NOT DELETE THIS SAMPLE FILE
//? => to show data on Componen useSelector import from "react-redux"
//? => declare reducer on "store/index.js"
