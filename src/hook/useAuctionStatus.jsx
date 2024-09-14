import { useEffect, useState } from "react";
import useNow from "./useNow";
export default function useAuctionStatus(start, period) {
  start = start || 0;
  period = period || 0;
  let now = useNow();

  let endTime = start !== 0 ? start + period : 2530589725000;

  const [status, setStatus] = useState("nobid");
  useEffect(() => {
    if (start) {
      // console.log(start, now, endTime);
      // now < start
      //   ? setStatus("unstarted")
      //   : now < endTime
      //   ? setStatus("ongoing")
      //   : setStatus("ended");

      now > endTime
        ? setStatus("ended")
        : now > start
        ? setStatus("ongoing")
        : setStatus("unstarted");
    }
  }, [now, start]);

  return status;
  // return "ended";
}
