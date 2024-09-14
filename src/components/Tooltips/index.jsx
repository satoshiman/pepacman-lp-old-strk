import { Tooltip, OverlayTrigger } from "react-bootstrap";

export default function Tooltips({ text, id, placement, children }) {
  return (
    <OverlayTrigger
      placement={placement || "top"}
      overlay={<Tooltip id={`${id}-tooltips`}>{text}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}
