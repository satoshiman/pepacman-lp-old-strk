import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

import { networkId, networkInfo, networkInfoList } from "../config/network";

export const injected = new InjectedConnector({
  supportedChainIds: [networkId],
});

export const walletConnect = new WalletConnectConnector({
  rpc: {
    1: networkInfoList[1].rpc,
    11155111: networkInfoList[11155111].rpc,
  },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: networkInfoList[networkId].rpc,
  appName: "101Verse",
  appLogoUrl: "https://imgtest.numr.io/3",
  chainId: networkId,
});
