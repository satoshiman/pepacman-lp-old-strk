import { configureStore } from "@reduxjs/toolkit";
import modalWalletReducer from "./slice/modalWallet";
import historyReducer from "./slice/history";

export const store = configureStore({
  reducer: {
    modalWallet: modalWalletReducer,
    history: historyReducer,
  },
});
