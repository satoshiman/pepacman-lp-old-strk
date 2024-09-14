export const networkId = process.env.REACT_APP_NETWROKID * 1 || 1;

const networkAddressBook = {
  1: {
    bird: "0x8639aA492A8F82BEF2bcbFe0e8F56de04850936c",
  },
  11155111: {
    bird: "0x8639aA492A8F82BEF2bcbFe0e8F56de04850936c",
  },
};

export const networkInfoList = {
  1: {
    name: "Ethereum network",
    symbol: "ETH",
    short: "Ξ",
    rpc: "https://rpc.ankr.com/eth",
    confirmations: 1,
    type: "mainnet",
    explorer: "https://etherscan.io",
    deploy_link: "",
  },
  11155111: {
    name: "Ethereum Sepolia network",
    symbol: "sETH",
    short: "Ξ",
    rpc: "https://eth-sepolia.g.alchemy.com/v2/lIBWX23yNDIRxKbyjEuKeMSTh-rv4nSX",
    confirmations: 1,
    type: "testnet",
    explorer: "https://sepolia.etherscan.io",
    deploy_link: "https://numr.io",
  },
};

export const networkInfo = networkInfoList[networkId];
export const addressBook = networkAddressBook[networkId];

export const supportedChain = Object.keys(networkInfoList).map((x) =>
  parseInt(x)
);
