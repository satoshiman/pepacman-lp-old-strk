import { Link, NavLink } from "react-router-dom";
import { SOCIAL_LINK } from "../../constants";
import {
  FaMediumM,
  FaTwitter,
  FaTelegramPlane,
  FaGithub,
  FaDiscord,
  FaBook,
} from "react-icons/fa";
import { addressBook, networkInfo } from "../../config/network";

import "./style.scss";

// import { BsBoxArrowUpRight } from "react-icons/bs";
// import w3f from "../assets/images/w3fg.svg";

export default function Footer() {
  return (
    <footer className="">
      <div className="container-lg mt-auto">
        <div className="gap-2"></div>
        <div className="row py-4 d-flex justify-content-between align-items-center">
          <div className="col-sm-6 text-center text-sm-start">
            <p className="mb-2 fw-bold brand-font fs-5 text-primary">
              <img
                className="scale"
                src={require("../../assets/images/logo.png").default}
                alt=""
                width="250px"
              />
            </p>
            <p className="small">
              {/* <a
                href="https://docs.numr.io"
                className="text-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </a>{" "}
              <span className="mx-1 text-muted">•</span>{" "} */}
              {/* <Link to="/terms" className="text-secondary">
                Terms of services
              </Link> */}
            </p>
          </div>
          <div className="col-sm-6 text-center text-sm-end">
            {/* <ul className="marketplace-list social-icons mt-4 mt-sm-0">
              <li>
                <a href={SOCIAL_LINK.blur} target="_blank" rel="noreferrer">
                  <img
                    src={
                      require("../../assets/images/logo-white/blur.png").default
                    }
                    alt=""
                  />
                  Blur
                </a>
              </li>

              <li className="">
                <a href={SOCIAL_LINK.os} target="_blank" rel="noreferrer">
                  <img
                    src={
                      require("../../assets/images/logo-white/os.svg").default
                    }
                    alt=""
                  />
                  OpenSea
                </a>
              </li>
            </ul> */}
            <ul className="social-icons">
              {/* <li className="">
                <a
                  href={networkInfo.explorer + "/address/" + addressBook.bird}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      require("../../assets/images/logo-white/etherscan.svg")
                        .default
                    }
                    alt=""
                  />
                </a>
              </li> */}
              {/* <li className="">
                <a
                  href={networkInfo.explorer + "/address/" + addressBook.c101}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      require("../../assets/images/logo-white/etherscan.svg")
                        .default
                    }
                    alt=""
                  />
                </a>
              </li> */}
              <li className="">
                <a href={SOCIAL_LINK.tw} target="_blank" rel="noreferrer">
                  <img
                    src={
                      require("../../assets/images/logo-white/twitter.svg")
                        .default
                    }
                    alt=""
                  />
                </a>
              </li>
              {/* <li className="">
                <a href={SOCIAL_LINK.tele} target="_blank" rel="noreferrer">
                  <img
                    src={
                      require("../../assets/images/logo-white/telegram.webp")
                        .default
                    }
                    alt=""
                  />
                </a>
              </li> */}
              <li className="">
                <a href={SOCIAL_LINK.tele} target="_blank" rel="noreferrer">
                  <img
                    src={
                      require("../../assets/images/logo-white/telegram.webp")
                        .default
                    }
                    alt=""
                  />
                </a>
              </li>
              {/* <li className="">
              <a href={SOCIAL_LINK.substack} target="_blank" rel="noreferrer">
                <img
                  src={
                    require("../../assets/images/logo-white/substack.png")
                      .default
                  }
                  alt=""
                />
              </a>
            </li>
            <li className="">
              <a href={SOCIAL_LINK.linktree} target="_blank" rel="noreferrer">
                <img
                  src={
                    require("../../assets/images/logo-white/linktree.svg")
                      .default
                  }
                  alt=""
                />
              </a>
            </li>
            <li className="">
              <a href={SOCIAL_LINK.link3} target="_blank" rel="noreferrer">
                <img
                  src={
                    require("../../assets/images/logo-white/link3.png").default
                  }
                  alt=""
                />
              </a>
            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
