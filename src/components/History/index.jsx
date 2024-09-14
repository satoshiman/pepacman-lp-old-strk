import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeToast } from "../../store/slice/history";
import { shortAddress } from "../../utils";
import { networkInfo } from "../../config/network";
import { Link, NavLink } from "react-router-dom";

import { BsCheckLg, BsFillExclamationDiamondFill } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

import { APP_IMG } from "../../constants";

function Status({ status }) {
  return (
    <>
      {status === "pending" ? (
        <>
          <span
            className="spinner-border spinner-border-sm me-2 text-warning"
            role="status"
            aria-hidden="true"
          ></span>
          Proccesing...
        </>
      ) : status === "success" ? (
        <>
          <BsCheckLg className="me-2" />
          Success
        </>
      ) : (
        <span className="text-danger">
          <BsFillExclamationDiamondFill className="me-2" />
          Error
        </span>
      )}
    </>
  );
}

export default function History() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);
  return (
    <>
      <ToastContainer position="bottom-end" className="position-fixed p-3">
        {history.map((tx, id) => (
          <Toast
            key={id}
            show={!tx.close}
            onClose={() => dispatch(closeToast({ hash: tx.hash, close: true }))}
          >
            <Toast.Header closeVariant="white">
              <strong className="me-auto text-uppercase fs-5">
                {tx.message}
              </strong>

              <Status status={tx.status} />
            </Toast.Header>
            <Toast.Body>
              <div className="d-flex">
                <a
                  className="btn btn-dark btn-sm me-auto "
                  type="button"
                  target="_blank"
                  href={`${networkInfo.explorer}/tx/${tx.hash}`}
                >
                  Tx: {shortAddress(tx.hash)} <GoLinkExternal className="" />
                </a>
                {tx.status === "success" && tx.type === "mint" && (
                  <Link
                    to="/profile"
                    className="btn btn-sm btn-primary"
                    type="button"
                  >
                    Open my wallet
                  </Link>
                )}
              </div>
            </Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </>
  );
}
