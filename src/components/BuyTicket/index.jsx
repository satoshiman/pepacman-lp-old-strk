/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from "react";
import { getCost } from "./async";
import numeral from "numeral";
import { ConnectButton } from "../Buttons";
import { useParams } from "react-router-dom";
// import { useWeb3React } from "@web3-react/core";
import { getBirdContract } from "../../contract";
import { FaCircle } from "react-icons/fa";
import Web3Utils from "web3-utils";

import { useDispatch } from "react-redux";
import { addTx, updateStatus } from "../../store/slice/history";

import {
  getTier,
  getTierNumber,
  getDefaultPower,
  getSupply,
  shortAddress,
} from "../../utils";
import { Tabs, Tab } from "react-bootstrap";
import Debugger from "ui-debug";

const RenderWhen = ({ condition, children }) => {
  return condition ? children : null;
};

export default function () {
  const dispatch = useDispatch();

  const [lot, setlot] = useState(5);

  let [cost, setCost] = useState();
  // let timeoutId;

  function buy() {
    console.log("buy");
  }

  return (
    <main className="main">
      <div className="container app-width">
        <div className="gap-3" />

        <div className="sign-border">
          <div className="gap-3" />
          <div className="text-center">
            <h1 className="fs-2 text-primary" style={{ fontSize: 60 }}>
              Buy ticket
            </h1>

            {/* <div className="lead">1 Lot = 50 Tickets</div> */}
            <div className="gap-3" />

            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn btn-light icon-button"
                disabled={lot <= 1}
                onClick={() => lot !== 1 && setlot(lot - 1)}
              >
                -
              </button>
              <span className="mx-5 fw-bold fs-1">
                {lot} lot{lot > 1 ? "s" : ""}
              </span>
              <button
                className="btn btn-light icon-button"
                // disabled={mintAmount >= available}
                onClick={() => setlot(lot + 1)}
              >
                +
              </button>
            </div>
            <div className="gap-3" />

            <div className="fs-3">
              Total: {cost ? Web3Utils.fromWei(cost) : "-"} ETH
            </div>

            <div className="fs-3">
              You will get{" "}
              <span className="text-primary">{20 * lot} tickets</span>
            </div>
            <div className="gap-3" />

            <div>
              {/* <ConnectButton
                autoHide
                className="btn btn-primary btn-lg"
                text="connect wallet"
              /> */}
              <div className="btn btn-primary btn-lg"> Comming soon</div>
              <RenderWhen condition={true}>
                <img
                  src={require("../../assets/images/pacman_eat.gif").default}
                  alt="pepacman logo"
                  className="mw-100 pixelated"
                  style={{ width: "80px" }}
                />
                <button
                  className="btn btn-primary btn-lg mx-5"
                  onClick={() => {
                    buy();
                  }}
                >
                  Buy {lot} lot{lot > 1 ? "s" : ""}
                </button>
                <img
                  src={require("../../assets/images/pacman_eat.gif").default}
                  alt="pepacman logo"
                  className="mw-100 pixelated"
                  style={{ width: "80px" }}
                />
              </RenderWhen>
            </div>
          </div>
          <div className="gap-3" />
        </div>
        <div className="gap-3" />

        <div>
          <h2 className="text-primary">Ticket sale information</h2>
          <ul className="ticketInfo">
            <li>1 lot = 20 tickets = 0.01e</li>
            <li>5 lots = 100 tickets = 10% discount</li>
            <li>10 lots = 200 tickets = 20% discount</li>
            <li>
              50% of the ticket revenue will be reserved for the prize pot of
              the game
            </li>
            <li>
              50% will be reserved for future Revshare for top token holders.
              Every 72 hours of the game, the prize pot will be paid out to the
              wallet who achieved the highest score
            </li>
          </ul>
        </div>

        {/* <Debugger data={{ cost }} /> */}
        <div className="gap-6" />
        <div className="gap-6" />
      </div>
    </main>
  );
}
