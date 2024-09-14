import numeral from "numeral";
import "./style.scss";
import { useState, useEffect } from "react";
import { APP_IMG } from "../../constants";

// LOAD IMAGE ONLY
export default function Previewer({ number, className }) {
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [number]);
  return (
    <div className={`nft-previewer  ${className}`}>
      <div
        className={`img-container rounded-circle border ${
          loaded ? "" : "loading"
        }`}
      >
        <img
          onLoad={() => {
            setLoaded(true);
          }}
          zax
          width="1200"
          src={number ? `${APP_IMG}/${number}` : null}
          alt={number}
          className={loaded ? "rounded-circle" : "d-none"}
        />
      </div>
    </div>
  );
}
