import Web3 from "web3";
import { networkInfo, networkId } from "../config/network.js";
import { toHex } from "web3-utils";
import { injected, walletConnect, walletlink } from "./connectors";
export async function loadWeb3(wallet) {
  // if (window.ethereum) {
  //   window.web3 = new Web3(window.ethereum);
  // } else if (window.web3) {
  //   window.web3 = new Web3(window.web3.currentProvider);
  // } else {
  //   window.web3 = new Web3(new Web3.providers.HttpProvider(networkInfo.rpc));
  // }
  if (wallet) {
    window.web3 = new Web3(wallet.ethereum);
    return new Web3(wallet.ethereum);
  }

  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Accounts now exposed
      return web3;
    } catch (error) {
      console.error(error);
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use MetaMask/Mist's provider.
    const web3 = window.web3;
    console.log("Injected web3 detected.");
    return web3;
  }
  // Fallback to localhost; use dev console port by default...
  else {
    const provider = new Web3.providers.HttpProvider(networkInfo.rpc);
    const web3 = new Web3(provider);
    console.log("No web3 instance injected, using Local web3.");
    return web3;
  }
}

export async function disconnect(wallet) {
  try {
    wallet.deactivate();
    // Clear isConnected
    // localStorage.setItem("isConnected", false);

    // Clear All

    localStorage.clear();
  } catch (ex) {
    console.log(ex);
  }
}

export async function connect(wallet) {
  //   injected
  try {
    await wallet.activate(injected);
    localStorage.setItem("isConnected", true);
  } catch (ex) {
    console.log(ex);
  }
}

export async function connectWalletConnect(wallet) {
  try {
    await wallet.activate(walletConnect);
    localStorage.setItem("isConnected", true);
  } catch (ex) {
    console.log(ex);
  }
}

export async function coinbaseConnect(wallet) {
  try {
    await wallet.activate(walletlink);
    localStorage.setItem("isConnected", true);
  } catch (ex) {
    console.log(ex);
  }
}

export async function ledgerConnect(wallet) {
  try {
    await wallet.connect("ledger");
    localStorage.setItem("isConnected", true);
  } catch (ex) {
    console.log(ex);
  }
}

export const connectWalletOnPageLoad = async (wallet) => {
  if (localStorage.getItem("isConnected") === "true") {
    let lastConnector =
      localStorage.getItem("LAST_WALLET_CONNECTOR") || "injected";

    if (lastConnector === "walletconnect") {
      try {
        await wallet.connect("walletconnect");
        localStorage.setItem("isConnected", true);
      } catch (ex) {
        console.log(ex);
      }
    } else if (lastConnector === "walletlink") {
      try {
        await wallet.connect("walletlink");
        localStorage.setItem("isConnected", true);
      } catch (ex) {
        console.log(ex);
      }
    } else
      try {
        await wallet.activate(injected);
        localStorage.setItem("isConnected", true);
      } catch (ex) {
        console.log(ex);
      }
  }
};

export async function switchNetwork(callback) {
  const ethereum = window.ethereum;

  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: toHex(networkId) }],
    });

    return callback;
  } catch (switchError) {
    // 4902 error code indicates the chain is missing on the wallet
    console.log(switchError);
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: toHex(networkId),
              rpcUrls: [networkInfo.rpc],
              chainName: networkInfo.name,
              nativeCurrency: {
                name: networkInfo.symbol,
                decimals: 18,
                symbol: networkInfo.symbol,
              },
              blockExplorerUrls: [networkInfo.explorer],
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}
