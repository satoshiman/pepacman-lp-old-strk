import axios from "axios";

export const payment = axios.create({
  baseURL: "https://testnet-api.101verse.xyz/btc-receive",
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export async function createInvoice({ from, quantity, mintFor }) {
  mintFor = mintFor || from;
  try {
    let res = await payment.post("/order", { from, quantity, mintFor });
    return res.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getAvailable(from) {
  try {
    let res = await payment.get(`/available?from=${from}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getInvoiceStatus(id) {
  try {
    let res = await payment.get(`/invoice?id=${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getSeason(from) {
  try {
    let res = await payment.get("/season");
    return res.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getHistory(from) {
  try {
    let res = await payment.get(`/invoices?from=${from}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return;
  }
}
