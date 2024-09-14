import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";

import Web3Utils from "web3-utils";
import { LoadScreen } from "../LoadScreen";

import ScrollToTop from "./ScrollToTop";

import Home from "../Home";

import NotFound from "../NotFound";

import Header from "../Header";
import Footer from "../Footer";
import History from "../History";
import BuyTicket from "../BuyTicket";

import { ConnectModal } from "../Modals";

export default function Container() {
  return (
    <Router>
      <LoadScreen>
        <Header />

        <Switch>
          <Route exact path="/">
            <ScrollToTop>
              <Home />
            </ScrollToTop>
          </Route>
          <Route exact path="/buy-ticket">
            <ScrollToTop>
              <BuyTicket />
            </ScrollToTop>
          </Route>

          <Route exact path="">
            <ScrollToTop>
              <NotFound />
            </ScrollToTop>
          </Route>
        </Switch>

        {/* <SwitchNetworkModal /> */}
        <ConnectModal />
        <Footer />
        {/* </div> */}
        {/* </div> */}
        <History />
      </LoadScreen>
    </Router>
  );
}
