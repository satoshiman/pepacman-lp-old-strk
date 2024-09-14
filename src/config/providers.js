import { networkInfo } from "./network";
import { ethers } from "ethers";

export const httpProvider = new ethers.providers.JsonRpcProvider(
  networkInfo.rpc
);
