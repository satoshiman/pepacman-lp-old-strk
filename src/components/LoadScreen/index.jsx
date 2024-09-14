import { useState, useEffect } from "react";

export function LoadScreen({ children }) {
  let [loading, setLoading] = useState(true);
  let [fade, setFade] = useState(false);
  useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Set an appropriate timeout value

    setTimeout(() => {
      setFade(true);
    }, 2500); // Set an appropriate timeout value
  }, []);

  return (
    <>
      {loading ? (
        <div className="">
          <div className={`loading-screen ${fade ? "fade-off" : ""}`}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={require("../../assets/images/pacman_eat.gif").default}
                className={`zoomit pixelated ${fade ? "fade-off" : ""}`}
                alt=""
                width="100px"
              />
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
