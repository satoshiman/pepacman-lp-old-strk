/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { ConnectButton } from "../Buttons";
import "./style.scss";
import { getUserInfo } from "./async";
import { connectWalletOnPageLoad } from "../../utils/wallet.js";
import { Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { shortAddress } from "../../utils";
// import { useWeb3React } from "@web3-react/core";
import NavDropdown from "react-bootstrap/NavDropdown";
import { disconnect } from "../../utils/wallet.js";
import Modal from "react-bootstrap/Modal";
import PlayThemeSongButton from "../PlayThemeSongButton";
import { SOCIAL_LINK } from "../../constants";

import {
  FaMediumM,
  FaTwitter,
  FaTelegramPlane,
  FaGithub,
  FaDiscord,
  FaBook,
} from "react-icons/fa";

import {
  networkId,
  networkInfoList,
  networkInfo,
  supportedChain,
} from "../../config/network";
import { Logos } from "../../assets/CoinLogos";

export default function Header() {
  // const wallet = useWeb3React();

  let [showMenu, setShowMenu] = useState(false);
  let location = useLocation();

  // useEffect(() => {
  //   // (async () => {
  //   //   window.web3 = await loadWeb3();
  //   // })();

  //   console.log(
  //     "  ██╗ ██████╗  ██╗",
  //     "\n",
  //     "███║██╔═████╗███║",
  //     "\n",
  //     "╚██║██║██╔██║╚██║",
  //     "\n",
  //     " ██║████╔╝██║ ██║",
  //     "\n",
  //     " ██║╚██████╔╝ ██║",
  //     "\n",
  //     " ╚═╝ ╚═════╝  ╚═╝",
  //     "\n",
  //     "═══ 101VERSE ═══"
  //   );
  //   console.groupCollapsed(
  //     "Powered by %cDriLabs",
  //     "color: white;font-weight: bold;background: #00a665;font-size: 12px;padding: 2px 3px;border-radius: 3px;"
  //   );

  //   console.log("A Web3 Accelerator & Incubator");
  //   console.log("Website: https://dri.vc/labs");
  //   console.log("We are hiring: https://dri.vc/career");
  //   console.log("Say hi: labs@dri.vc");
  //   console.groupEnd();
  // }, []);

  // useEffect(() => {
  //   if (location.pathname !== "/" && !wallet.account) {
  //     setTimeout(() => {
  //       connectWalletOnPageLoad(wallet);
  //     }, 1000);
  //   }
  // }, [location]);

  let [userInfo, setUserInfo] = useState();
  // useEffect(() => {
  //   if (wallet.account) {
  //     (async () => {
  //       setUserInfo();
  //       setUserInfo(await getUserInfo(wallet.account, wallet.library));
  //     })();
  //   } else {
  //     setUserInfo();
  //   }
  // }, [wallet]);

  return (
    <>
      <div className="header sticky-top">
        <div className="container-lg app-width">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Link to="/" className="text-3 text-primary brand-font fw-bold">
                {/* <Logo /> */}
                <img
                  src={require("../../assets/images/logo.png").default}
                  alt="pepacman logo"
                  className="pepacman-logo"
                />
              </Link>
            </div>
            <div className="d-flex">
              <MenuList className="d-none d-lg-flex me-3" userInfo={userInfo} />
              {/* <ConnectButton
                autoHide
                text="Connect"
                className="btn btn-sm fw-bold btn-primary rounded-pill px-3 header-connect-button me-3 d-lg-none"
              /> */}

              <div className="d-flex align-items-center">
                {/* <a
                  href={SOCIAL_LINK.discord}
                  target="_blank"
                  className="mx-2"
                  rel="noreferrer"
                >
                  <img
                    src={
                      require("../../assets/images/logo-white/discord.svg")
                        .default
                    }
                    alt=""
                    width="34"
                    height="34"
                  />
                </a>

                <a
                  href={SOCIAL_LINK.tw}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <img
                    src={
                      require("../../assets/images/logo-white/twitter.svg")
                        .default
                    }
                    alt=""
                    width="34"
                    height="34"
                  />
                </a> */}
                <PlayThemeSongButton />
              </div>

              <a
                className="d-lg-none hamber-icon"
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <GiHamburgerMenu />
              </a>
            </div>
          </div>

          {/* <Debugger data={{ userInfo }} /> */}
        </div>

        <Offcanvas
          show={showMenu}
          onHide={() => {
            setShowMenu(false);
          }}
          placement="end"
          // closeButton="white"
          responsive="lg"
          className="d-lg-none mw-moble-nav"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>
              {/* <h2 className="brand-font">NUMR</h2> */}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MenuList />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      {!!networkInfo.ann && (
        <div className="container mt-4 app-width">
          <div className="row">
            <div className="col-12">
              <div className="alert alert-dark small py-2" role="alert">
                {networkInfo.ann}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
function MenuList({ className, userInfo }) {
  // const wallet = useWeb3React();
  const history = useHistory();
  const [smShow, setSmShow] = useState(false);
  return (
    <>
      <ul className={`flex-column flex-lg-row nav ${className}`}>
        <li>
          <NavLink
            exact={true}
            to="/"
            activeClassName="active"
            className="nav-link"
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            exact={true}
            to="/buy-ticket"
            activeClassName="active"
            className="nav-link"
          >
            <span>Buy Ticket</span>
          </NavLink>
        </li>
        <li className="">
          <a
            href="https://play.pepacman.com/"
            target="_blank"
            className="nav-link"
          >
            PLAY
          </a>
        </li>

        {/* {wallet.active && (
          <NavDropdown
            align={{ lg: "end" }}
            title={
              <span className="">
                {userInfo?.name || shortAddress(wallet.account)}
              </span>
            }
            id="nav-dropdown"
          >
            <NavDropdown.Item
              eventKey="4.5"
              className="bg-hover-danger"
              onClick={() => {
                disconnect(wallet);
              }}
            >
              Disconnect
            </NavDropdown.Item>
          </NavDropdown>
        )} */}
      </ul>
      <Modal
        size="sm"
        show={smShow}
        centered
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body className=" py-4">
          {/* <h4>Select network</h4> */}
          <p className="text-secondary text-center">Select network</p>
          {supportedChain.map((i, idx) => (
            <a
              href={networkId === i ? "" : networkInfoList[i].deploy_link}
              key={idx}
              onClick={(e) => networkId === i && e.preventDefault()}
            >
              <div
                className={`d-flex align-items-center sign-border mb-3 pointer ${
                  networkId === i ? "bg-paid" : "bg-hover-paid"
                }`}
              >
                <div className="flex-grow-1 me-3 text-normal">
                  {networkInfoList[i].name}
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={Logos[networkInfoList[i].symbol]}
                    alt="..."
                    className="height-2"
                  />
                </div>
                {/* <p>
              <button
                key={idx}
                
                active={networkId === i}
                active={networkId === i}
                className="sign-border btn btn-sm btn-dark"
              >
                {networkInfoList[i].name}
              </button>
            </p> */}
              </div>
            </a>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
