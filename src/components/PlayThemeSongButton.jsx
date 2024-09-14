import { useState, useEffect } from "react";
import themeSound from "../assets/theme.mp3";
import ReactHowler from "react-howler";

export default function PlayThemeSongButton() {
  const [isPlay, setIsPlay] = useState(() => {
    const storedIsPlay = localStorage.getItem("isPlay");
    return storedIsPlay !== null ? JSON.parse(storedIsPlay) : true;
  });

  useEffect(() => {
    localStorage.setItem("isPlay", JSON.stringify(isPlay));
  }, [isPlay]);
  return (
    <>
      <ReactHowler src={themeSound} playing={isPlay} />
      <a
        className="mx-2"
        onClick={(e) => {
          e.preventDefault();
          setIsPlay(!isPlay);
        }}
      >
        {!isPlay ? (
          <img
            src={require("../assets/images/logo-white/sound.svg").default}
            alt=""
            width="34"
            height="34"
          />
        ) : (
          <img
            src={require("../assets/images/logo-white/off-sound.svg").default}
            alt=""
            width="34"
            height="34"
          />
        )}
      </a>
    </>
  );
}
