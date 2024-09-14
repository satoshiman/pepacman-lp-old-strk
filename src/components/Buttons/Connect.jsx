import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../store/slice/modalWallet";
// import { useWeb3React } from "@web3-react/core";

export default function ConnectButton({ className, text, autoHide }) {
  text = text || "Connect";
  // const wallet = useWeb3React();
  const isShowModal = useSelector((state) => state.modalWallet.value);

  const dispatch = useDispatch();
  className = className || "btn btn-primary";
  return (
    <>
      {/* {(!wallet.active || !autoHide) && ( */}
      <button
        className={className}
        onClick={() => {
          dispatch(showModal());
        }}
      >
        {isShowModal ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            Connecting
          </>
        ) : (
          text
        )}
      </button>
      {/* )} */}
    </>
  );
}
