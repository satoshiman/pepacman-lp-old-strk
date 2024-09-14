import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
// import Web3 from "web3";
import { store } from "./store";
import { Suspense } from "react";

// require("dotenv").config();
// function getLibrary(provider) {
//   const library = new Web3(provider);
//   // library.pollingInterval = 10000;
//   return library;
// }

ReactDOM.render(
  <Suspense fallback={<div class="preload">Hold on, it's loading!</div>}>
    <React.StrictMode>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </React.StrictMode>
  </Suspense>,

  document.getElementById("root")
);
