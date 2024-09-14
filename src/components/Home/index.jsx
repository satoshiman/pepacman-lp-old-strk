import Accordion from "react-bootstrap/Accordion";
import useNow from "../../hook/useNow";
import $ from "jquery";
import React from "react";
import { Link } from "react-router-dom";
import { SOCIAL_LINK } from "../../constants";
import { Discord, OpenSea, X2y2 } from "../icons";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <main className="main var-bg-gray">
      <div className="hero-home">
        <div className="zoom-bg"></div>
        <div className=" hero-content px-4 d-flex align-items-end justify-content-center">
          <div className="text-center">
            <div className="gap-2"></div>
            {/* <h2 className="text-shadow hero-lead fs-1">
              The first digital art collection of the 101 ecosystem minting on
              Bitcoin.
            </h2> */}
            {/* <p>
              <img
                className="flashit"
                src={require("../../assets/images/ezgif.gif").default}
                alt=""
                width="800px"
              />
            </p> */}
            <p className="">
              <a
                className="btn btn-xl btn-primary m-4  px-5"
                target="_blank"
                href="https://play.pepacman.com"
              >
                play now
              </a>
              <Link
                to="/buy-ticket"
                className="btn btn-xl btn-secondary m-4  px-5"
              >
                buy tickets
              </Link>
            </p>
            {/* src={require("../../assets/images/logo.png").default} */}
            {/* <p className="">
              <a
                className="btn btn-lg btn-secondary m-2"
                href={SOCIAL_LINK.dextool}
                target="_blank"
                rel="noreferrer"
              >
                DEX TOOL
              </a>
              <a
                className="btn btn-lg btn-secondary m-2"
                href={SOCIAL_LINK.tele}
                target="_blank"
                rel="noreferrer"
              >
                TELEGRAM
              </a>
              <a
                className="btn btn-lg btn-secondary m-2"
                href={SOCIAL_LINK.uniswap}
                target="_blank"
                rel="noreferrer"
              >
                UNISWAP
              </a>
              <a
                className="btn btn-lg btn-secondary m-2"
                href={SOCIAL_LINK.tw}
                target="_blank"
                rel="noreferrer"
              >
                TWITTER
              </a>
            </p> */}
            <div className="gap-6"></div>
          </div>
        </div>
      </div>
      <div className="bg-map">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <img
                src={require("../../assets/images/pacman_eat.gif").default}
                alt="pepacman logo"
                className="mw-100 pixelated shakeit"
                style={{ width: "100px" }}
              />
            </div>

            <div className="col-md-8">
              <div className="gap-1"></div>

              <div className="px-3 text-white">
                <div className="gap-1"></div>
                <h2 className="text-primary">About</h2>
                <p>
                  In the world of Gamefi, a project called PEPACMAN combined
                  Pepe the Frog with the classic Pac-Man game. This project
                  offered a unique and exciting experience by blending retro
                  gaming with cryptocurrency in a vaporwave themed setting.
                </p>
                <div className="gap-1"></div>
                <Link
                  to="/buy-ticket"
                  className="btn  btn-lg  btn-secondary m-4 px-3"
                >
                  buy tickets
                </Link>{" "}
                <br />
                <a
                  className="btn btn-lg btn-primary m-4 px-5"
                  target="_blank"
                  href="https://play.pepacman.com"
                >
                  play now
                </a>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-end justify-content-end">
              <img
                src={require("../../assets/images/pep.png").default}
                alt="pepacman logo "
                className="slideIt"
                style={{ maxWidth: "400px" }}
              />
            </div>
          </div>
          <div className="gap-4"></div>
        </div>
      </div>

      <div className="">
        <div className="container-lg">
          <div className="row width-handle">
            <div className="col-md-4">
              <img
                src={require("../../assets/images/dog.png").default}
                alt="pepacman logo "
                className="mw-100 zoomit"
                style={{ maxWidth: "400px" }}
              />
            </div>

            <div className="col-md-8">
              <div className="gap-1"></div>

              <div className="px-3 text-white">
                <div className="gap-1"></div>

                <p>
                  Players guided Pepe through mazes, collecting coins and
                  avoiding doge’s.
                </p>
                <p>
                  The project fostered a community of enthusiasts who shared
                  strategies and celebrated achievements.
                </p>
                <div className="gap-1"></div>
              </div>
            </div>
          </div>
          <div className="gap-4"></div>
        </div>
      </div>

      <div className="gap-6" />

      <div className="container-lg">
        <div className="row">
          <div className="col-12 text-center">
            <div className="gap-4"></div>
            <video
              playsInline
              autoPlay="autoplay"
              loop="loop"
              muted="muted"
              className="w-100 rounded-4 mb-4"
              poster={require("../../assets/images/bg.png").default}
            >
              <source
                src={require("../../assets/images/clip.mp4").default}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="gap-4"></div>
      </div>
      <div className="gap-6" />

      <div className="container-lg">
        <div className="row">
          <div className="col-12 width-handle text-center">
            <img
              src={require("../../assets/images/ghost.png").default}
              alt="pepacman logo "
              className="pixelated shakeit"
              style={{ width: "160px" }}
            />
            <h2 className="text-primary my-5">Mechanics</h2>
            <p>
              The player controls PEPACMAN, who must eat all the dots inside an
              enclosed maze while avoiding four colored doges. Eating large
              flashing dots called "Power Pellets" causes the doges to
              temporarily turn blue, allowing Pac-Man to eat them for bonus
              points.
            </p>
            <img
              src={require("../../assets/images/ghost2.png").default}
              alt="pepacman logo "
              className="pixelated zoomit my-5"
              style={{ width: "160px" }}
            />
            <p className="text-start">
              To play the game, you have to buy tickets
              <ul className="ticketInfo">
                <li>1 lot = 20 tickets = 0.01e</li>
                <li>5 lots = 100 tickets = 10% discount</li>
                <li>10 lots = 200 tickets = 20% discount</li>
                <li>
                  50% of the ticket revenue will be reserved for the prize pot
                  of the game
                </li>
                <li>
                  50% will be reserved for future Revshare for top token
                  holders. Every 72 hours of the game, the prize pot will be
                  paid out to the wallet who achieved the highest score
                </li>
              </ul>
            </p>
            <div className="gap-6"></div>

            <p>
              <img
                src={require("../../assets/images/pacman_eat.gif").default}
                alt="pepacman logo"
                className="mw-100 pixelated"
                style={{ width: "80px" }}
              />
              <Link
                to="/buy-ticket"
                className="btn btn-xl btn-primary m-4 px-5"
              >
                buy tickets
              </Link>
              <img
                src={require("../../assets/images/pacman_eat.gif").default}
                alt="pepacman logo"
                className="mw-100 pixelated"
                style={{ width: "80px" }}
              />
            </p>
          </div>
        </div>

        <div className="gap-6"></div>
        <div className="gap-6"></div>
      </div>
    </main>
  );
}
