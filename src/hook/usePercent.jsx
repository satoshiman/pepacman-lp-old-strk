import { useEffect, useState } from "react";
import useNow from "./useNow";

export default function usePercent(start, end) {
  let now = useNow();
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (now) {
      let calPercent =
        !start || !end || end <= start
          ? 0
          : now > end
          ? 100
          : ((now - start) * 100) / (end - start);

      setPercent(calPercent);
    }
  }, [now]);

  return percent;
}
