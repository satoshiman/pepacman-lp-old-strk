// import axios from "axios";
// import { PAIR_ID, TOKEN_INFO } from '../constants'
// import abi from "human-standard-token-abi";

//convert address to short address
export const shortAddress = (address, num = 5) => {
  if (!address) {
    return "";
  }
  return (
    address.substring(0, num) +
    "…" +
    address.substring(address.length - num - 1, address.length)
  );
};

export const safeAmount = (string, decimal, significant) => {
  //* cut string to 6
  significant = significant || 6;
  //* cut string to
  if (significant === -1) {
    significant = decimal - 1;
  }
  if (string === null) return 0;
  if (string.length <= decimal - significant) return 0;
  string = string.slice(0, string.length - decimal + significant);
  return parseInt(string) / 10 ** significant;
};

// //load Uniswap price
//   export const loadUniSwapPrice = async (pair) => {
//     try {
//         const cash = await axios.post('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',

//             {
//                 query: `{
//                 pair(id: "`+PAIR_ID[pair]+`"){
//                     token0 {
//                     id
//                     symbol
//                     }
//                     token1 {
//                     id
//                     symbol
//                     }
//                     token1Price
//                     token0Price

//                 }
//             }`
//             });

//         return parseFloat(cash.data.data.pair.token1Price)

//     } catch {
//         console.log(Error)
//     }
// }

// //load Uniswap price
// export const loadUniSwapPrice0 = async (pair) => {
//   try {
//       const cash = await axios.post('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
//           {
//               query: `{
//               pair(id: "`+PAIR_ID[pair]+`"){
//                   token0 {
//                   id
//                   symbol
//                   }
//                   token1 {
//                   id
//                   symbol
//                   }
//                   token1Price
//                   token0Price

//               }
//           }`
//           });
//       return parseFloat(cash.data.data.pair.token0Price)

//   } catch {
//       console.log(Error)
//   }
// }

// //* Load balance
// export const loadAccountBalance = async (token, account) => {
//   if (account === null || account === "") return "wrong address";
//   let contract = new window.web3.eth.Contract(abi, TOKEN_INFO[token].address);
//   let balance = await contract.methods.balanceOf(account).call();
//   balance = safeAmount(balance, TOKEN_INFO[token].decimal);
//   // balance = parseFloat(balance) / 10 ** TOKEN_INFO[token].decimal
//   // console.log(account, token, balance)
//   return balance;
// };

// export const loadPriceUnipool = async (pair, token1, token2) => {
//   let token1Balance = await loadAccountBalance(token1, PAIR_ID[pair]);
//   let token2Balance = await loadAccountBalance(token2, PAIR_ID[pair]);

//   console.log("token1Balance", token1, token1Balance);
//   console.log("token2Balance", token2, token2Balance);
//   console.log("Price", token1, token2Balance / token1Balance);

//   return token2Balance / token1Balance;
// };

// export const myIP = async () => {
//   try {
//     const response = await axios.get("http://ip-api.com/json");
//     console.log(response);
//     return `Your IP ${response.data.query} (${response.data.countryCode} - ${response.data.city})`;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const blockTimestamp = async (block) => {
//   try {
//     const response = await window.web3.eth.getBlock(block);
//     // console.log(response.timestamp);
//     return response.timestamp;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getTier = (tokenid) => {
  return tokenid >= 1 && tokenid <= 99
    ? "premium"
    : tokenid >= 100 && tokenid <= 9999
    ? "bid"
    : tokenid >= 10000 && tokenid <= 99999
    ? "paid"
    : tokenid >= 100000 && tokenid <= 999999
    ? "free"
    : "invalid";
};

export const getTierNumber = (tokenid) => {
  return tokenid >= 1 && tokenid <= 9
    ? "Ultimate"
    : tokenid >= 10 && tokenid <= 99
    ? "Immortal"
    : tokenid >= 100 && tokenid <= 999
    ? "Legendary"
    : tokenid >= 1000 && tokenid <= 9999
    ? "Epic"
    : tokenid >= 10000 && tokenid <= 99999
    ? "Rare"
    : tokenid >= 100000 && tokenid <= 999999
    ? "Common"
    : "invalid";
};

export const getTierColor = (tokenid) => {
  return tokenid >= 1 && tokenid <= 99
    ? "premium"
    : tokenid >= 100 && tokenid <= 9999
    ? "bid"
    : tokenid >= 10000 && tokenid <= 99999
    ? "paid"
    : tokenid >= 100000 && tokenid <= 999999
    ? "free"
    : "invalid";
};

export const getDefaultPower = (tokenid) => {
  return tokenid >= 1 && tokenid <= 9
    ? 400
    : tokenid >= 10 && tokenid <= 99
    ? 350
    : tokenid >= 100 && tokenid <= 999
    ? 300
    : tokenid >= 1000 && tokenid <= 9999
    ? 100
    : tokenid >= 10000 && tokenid <= 99999
    ? 10
    : tokenid >= 100000 && tokenid <= 999999
    ? 1
    : undefined;
};

export const getSupply = (tokenid) => {
  return tokenid >= 1 && tokenid <= 9
    ? 9
    : tokenid >= 10 && tokenid <= 99
    ? 90
    : tokenid >= 100 && tokenid <= 999
    ? 900
    : tokenid >= 1000 && tokenid <= 9999
    ? 9000
    : tokenid >= 10000 && tokenid <= 99999
    ? 90000
    : tokenid >= 100000 && tokenid <= 999999
    ? 900000
    : 0;
};

export const getRandom = (min, max) => {
  min = min || 1;
  max = max || 999999;
  return Math.floor(Math.random() * (max - min) + min);
};

export const parseURI = (base64) => {
  let data = JSON.parse(
    atob(base64.replace("data:application/json;base64,", ""))
  );

  if (!data.attributes) {
    return {};
  }
  // console.log(data);
  return {
    number: data.attributes.filter((i) => i.trait_type === "Number")[0]?.value,
    color: data.attributes.filter((i) => i.trait_type === "Color")[0]?.value,
    fusion: data.attributes.filter((i) => i.trait_type === "Fusion")[0]?.value,
    element: data.attributes.filter((i) => i.trait_type === "Element")[0]
      ?.value,
  };

  // return {
  //   tokenId: data.attributes[0].value * 1,
  //   type: data.attributes[1].value,
  //   power: data.attributes[2].value * 1,
  //   tier: data.attributes[3].value,
  // };
};

export const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
