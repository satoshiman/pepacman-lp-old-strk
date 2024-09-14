import Web3Utils from "web3-utils";
import { networkInfo } from "../../config/network";
import { ethers } from "ethers";
export async function getUserInfo(account) {
  try {
    const httpProvider = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/eth"
    );
    let [name] = await Promise.all([httpProvider.lookupAddress(account)]);
    // console.log(name);
    return { name };
  } catch (e) {
    console.error(e);
  }
}
