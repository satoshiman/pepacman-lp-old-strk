import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { MdContentCopy, MdOutlineCheck } from "react-icons/md";

export function CopyButton({ data, copyText, copiedText, className }) {
  let [copied, setCopied] = useState(false);

  useEffect(() => {
    let interval = setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 700);
    // return clearInterval(interval);
  }, [copied]);
  return (
    <button
      className={className || "btn btn-link mx-1 pt-0 ps-1"}
      type="button"
      onClick={() => {
        copy(data, {
          onCopy: setCopied(true),
        });
      }}
    >
      {copied
        ? copiedText || <MdOutlineCheck />
        : copyText || <MdContentCopy />}
    </button>
  );
}
