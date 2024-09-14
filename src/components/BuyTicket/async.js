import { getBirdContract, getBirdContractRPC } from "../../contract";
import { parseURI } from "../../utils";

const contract = getBirdContractRPC();

export async function getCost(number) {
  const _cost = async () => contract.methods.getCost(number).call();

  try {
    let [cost] = await Promise.all([_cost()]);

    return cost;
  } catch (e) {
    console.error(e);
  }
}
