import { disconnect } from "../../utils/wallet.js";
export default function DisconnectButton({ className, text, autoHide }) {
  // const wallet = useWeb3React();
  className = className || "btn btn-primary";
  return (
    <>
      {/* {(wallet.active || !autoHide) && ( */}
      <button
        className={className}
        onClick={() => {
          // disconnect(wallet);
        }}
      >
        {text || "Disconnect"}
      </button>
      {/* )} */}
    </>
  );
}
