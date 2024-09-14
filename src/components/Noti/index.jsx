import { Link } from "react-router-dom";
import { SOCIAL_LINK } from "../../constants";

export function EmptyNoti() {
  return (
    <div className="text-center text-secondary">
      <div className="gap-2" />
      Your wallet does not contain any Ballz. You can either
      <div className="gap-1" />
      <Link to="/mint" className="btn btn-sm btn-primary rounded-pill m-2 px-3">
        mint an NFT
      </Link>{" "}
      or buy from{" "}
      <a
        href={SOCIAL_LINK.magic}
        className="btn btn-sm btn-primary rounded-pill m-2 px-3"
        target="_blank"
        rel="noreferrer"
      >
        MagicEden
      </a>
      <a
        href={SOCIAL_LINK.os}
        className="btn btn-sm btn-primary rounded-pill m-2 px-3"
        target="_blank"
        rel="noreferrer"
      >
        OpenSea
      </a>
      <a
        href={SOCIAL_LINK.x2y2}
        className="btn btn-sm btn-primary rounded-pill m-2 px-3"
        target="_blank"
        rel="noreferrer"
      >
        X2Y2
      </a>
      <div className="gap-6"></div>
    </div>
  );
}
