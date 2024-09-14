import Accordion from "react-bootstrap/Accordion";
import useNow from "../../hook/useNow";
import $ from "jquery";
import React from "react";
import { Link } from "react-router-dom";
import { SOCIAL_LINK } from "../../constants";
import { Discord, OpenSea, X2y2 } from "../icons";

import { HiArrowNarrowRight, HiArrowNarrowUp } from "react-icons/hi";
export default function Home() {
  let now = useNow();

  return (
    <main className="main ">
      <div className="hero-home width-handle">
        <div className=" hero-content d-flex align-items-center justify-content-center">
          <div className="text-center px-5">
            <img
              src={require("../../assets/images/ballz.png").default}
              alt=""
              className="mw-100"
              style={{ width: "500px" }}
            />
            <div className="gap-2"></div>

            <h2 className="hero-title  fs-2">"In Ballz, We trust"</h2>
            <p className="my-4">
              <a href={SOCIAL_LINK.discord} target="_blank" rel="noreferrer">
                <Discord width="40px" className="mx-3" />
              </a>
              <a href={SOCIAL_LINK.os} target="_blank" rel="noreferrer">
                <OpenSea width="40px" className="mx-3" />
              </a>
              <a href={SOCIAL_LINK.x2y2} target="_blank" rel="noreferrer">
                <X2y2 width="40px" className="mx-3" />
              </a>
            </p>
            <p className="lead text-secondary">
              Ballz are the most technologically advanced spaceships made from
              very strong but light weight materials, such as titanium or
              aluminum that can be combined to create better space ships. They
              were discovered by [redacted] to send teams on special missions to
              space. Initially, there are 5050 Space Ballz NFT's holding values
              ranging from 1-100 with different rarities. Through combination
              (fused NFT's), the values will change and represent the combined
              numbers value. The top 3 wallet with the highest scores, will win
              101 ETH. Ballz can be considered to be our genesis collection that
              will receive all benefits and perks first.
            </p>
            <div className="gap-2"></div>

            <p>
              <Link
                to="/mint"
                className="btn btn-anim btn-lg btn-primary rounded-pill m-2 px-5"
              >
                Mint Ballz <HiArrowNarrowRight className="cta-icon" />
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row row-cols-1 row-cols-lg-3 gap-2em text-center ">
          <div className="col  mb-5">
            <div className="box bg-transparent pt-4 vertical-box  h-100">
              <div className="text w-100">
                <img
                  className="scale mx-auto"
                  src={require("../../assets/images/set1a.png").default}
                  // src={typhoon}
                  alt=""
                  height="180px"
                />
                <h2 className="mt-3">🏆 VIP Membership</h2>
                <p>
                  Ballz are compact super spaceships that can be used for
                  transportation (and more) in space and also on earth. 101
                  Ballz holders are our VIP's and get access to an exceptional
                  ballz club who help each other.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="gap-3 d-none d-sm-block"></div> */}
          <div className="col mb-5">
            <div className="box  bg-transparent  pt-4 vertical-box h-100">
              <div className="text w-100">
                <img
                  className="scale mx-auto"
                  src={require("../../assets/images/set1a.png").default}
                  alt=""
                  height="180px"
                />
                <h2 className="mt-3">🚀 Accelerator</h2>
                <p>
                  Fused Space Ballz (regardless of the number value) boost every
                  utility of your 101verse NFT's, from raffles to missions
                  (staking), earning $XXX, $YYY more.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="box  bg-transparent  pt-4 vertical-box h-100">
              <div className="text  w-100">
                <img
                  className="scale mx-auto"
                  src={require("../../assets/images/set1a.png").default}
                  alt=""
                  height="180px"
                />
                <h2 className="mt-3">💆 Special treatment</h2>
                <p>
                  Fused NFT's, especially those with the value of 101 will earn
                  exclusive perks including preferential allowlist spots, NFT
                  drops, and other perks. It is rumored that holders will also
                  be able to let others rent their spaceships for questing in
                  order to earn rewards passively in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-5" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center width-handle">
              <h2 className="hero-title fs-1">THE GAME</h2>
              <p className="lead text-secondary">
                The best 3 players will share attractive rewards up to 101 ETH
              </p>
            </div>
            <div className="gap-4"></div>
          </div>
        </div>

        <div className="row flex-md-row flex-column-reverse">
          <div className="col-md-6">
            <div className="">
              <p>
                There will be 5050 NFT's from number 1 to 100 with different
                rarities. Each two NFT can be combined with a plus sign for a
                score that we will count on a specific date. If you get 101 you
                achieve a 10x multiplier.
              </p>
              <p>
                If you make it to the top 50% of the scoreboard, you will get a
                reward in proportion to your ranking. Those who achieved a 101
                combo will get an automatic whitelist for the next game. More
                secret perks to come to our holders.
              </p>
              <Link to="/mint" className="btn btn-link ps-0 btn-anim fs-5">
                Game mechanism <HiArrowNarrowRight className="cta-icon" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <img
                className="scale mx-auto mw-100"
                src={require("../../assets/images/thegame.png").default}
                // src={typhoon}
                alt=""
              />
              <p className="text-primary">
                If you make it to the top 50% of the scoreboard, you will get a
                reward in proportion to your ranking. Those who achieved a 101
                combo will get an automatic whitelist for the next game. More
                secret perks to come to our holders.
              </p>
            </div>
          </div>
          <div className="gap-6"></div>
          <div className="gap-6"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center width-handle">
              <h2 className="hero-title fs-3">Leader board</h2>
              <p className="lead text-secondary">
                The best 3 players will share attractive rewards up to 101 ETH
              </p>
              <div></div>
              <table className="table">
                <thead>
                  <tr className="text-primary">
                    <th scope="col">#</th>
                    <th scope="col">Player</th>
                    <th scope="col">Score</th>
                    <th scope="col">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7].map((i, idx) => (
                    <tr>
                      <th scope="row">{idx + 4}</th>
                      <td>0x123...456</td>
                      <td>2020</td>
                      <td>
                        20
                        <HiArrowNarrowUp className="mb-1" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="gap-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
