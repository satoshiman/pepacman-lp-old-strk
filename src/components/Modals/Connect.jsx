// import { useWeb3React } from "@web3-react/core";
import { hideModal } from "../../store/slice/modalWallet";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./connect.scss";

import { useSelector, useDispatch } from "react-redux";
import {
  connect,
  connectWalletConnect,
  coinbaseConnect,
  ledgerConnect,
} from "../../utils/wallet.js";

function Icon({ name, image, onClick, background }) {
  return (
    <div className="col-12">
      <div
        onClick={onClick}
        className="pointer wallet-container mb-4 d-flex align-items-center"
        style={{ background: background || "transparent" }}
      >
        <img
          className="wallet-icon flex-shrink-0"
          src={require(`../../assets/images/wallet/${image}`).default}
          alt={name}
        />
        <div className="flex-grow-1 ms-3  fw-bold text-white">{name}</div>
      </div>
    </div>
  );
}

export default function ConnectModal() {
  const isShowModal = useSelector((state) => state.modalWallet.value);
  const dispatch = useDispatch();
  // const wallet = useWeb3React();

  const closeHandler = () => {
    dispatch(hideModal());
    // console.log("closed");
  };

  // useEffect(() => {
  //   if (wallet.active) {
  //     dispatch(hideModal());
  //   }
  // }, [wallet]);

  return (
    <Modal
      show={isShowModal}
      centered
      contentClassName=""
      onHide={closeHandler}
    >
      {/* <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="h6">Connect your Wallet</Modal.Title>
      </Modal.Header> */}
      <Modal.Body className="py-4">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h5 className="text-white fs-3">Choose Wallet</h5>
          </div>
          <Icon
            onClick={() => {
              // connect(wallet);
              closeHandler();
            }}
            name="Metamask"
            image="metamask.jpeg"
            background="rgb(245, 132, 31)"
          />
          <Icon
            onClick={() => {
              // connectWalletConnect(wallet);
              closeHandler();
            }}
            name="Trust wallet"
            image="trust.jpeg"
            background="rgb(51, 117, 187)"
          />
          <Icon
            onClick={() => {
              // coinbaseConnect(wallet);
              closeHandler();
            }}
            name="Coinbase wallet"
            image="coinbase.svg"
            background="rgb(13, 91, 255)"
          />
          <Icon
            onClick={() => {
              // connectWalletConnect(wallet);
              closeHandler();
            }}
            name="Walletconnect"
            image="walletconnect.png"
            background="rgb(59, 153, 252)"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}
