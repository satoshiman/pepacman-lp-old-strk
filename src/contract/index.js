// export { default as numrAbi } from "./numr.json";
import numrAbi from "./numr.json";
import birdAbi from "./bird.json";
import c101 from "./101.json";

import { addressBook, networkInfo } from "../config/network";
import Web3 from "web3";

export function getBirdContract(library) {
  // const web3 = window.web3;
  return new library.eth.Contract(birdAbi, addressBook.bird);
}

export function getBirdContractRPC() {
  const web3 = new Web3(new Web3.providers.HttpProvider(networkInfo.rpc));
  return new web3.eth.Contract(birdAbi, addressBook.bird);
}

export function getNumrContract(library) {
  // const web3 = window.web3;
  return new library.eth.Contract(numrAbi, addressBook.numr);
}

export function getNumrContractRPC() {
  const web3 = new Web3(new Web3.providers.HttpProvider(networkInfo.rpc));
  return new web3.eth.Contract(numrAbi, addressBook.numr);
}

export function get101Contract(library) {
  // const web3 = window.web3;
  return new library.eth.Contract(c101, addressBook.c101);
}

export function get101ContractRPC() {
  const web3 = new Web3(new Web3.providers.HttpProvider(networkInfo.rpc));
  return new web3.eth.Contract(c101, addressBook.c101);
}
