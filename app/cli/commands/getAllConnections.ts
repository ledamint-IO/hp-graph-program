import * as anchor from "@j0nnyboi/anchor";
import { getWallet } from "../tools/wallet.js";
import { Program } from "@holaplex/graph-program";
import fs from "fs/promises";

const { getGraphProgram } = Program;

type GetAllConnectionsInput = {
  rpc: string;
  solanaKeypair: string;
  outFile: string;
};

export const buildGetAllConnectionsCommand =
  () => async (input: GetAllConnectionsInput) => {
    const wallet = await getWallet(input.solanaKeypair);
    const connection = new anchor.web3.Connection(input.rpc);
    const graphProgram = getGraphProgram(
      new anchor.AnchorProvider(connection, wallet, {})
    );
    const results = await graphProgram.account.connectionV2.all();
    const map = results.map(({ account: { from, to }, publicKey }) => ({
      publicKey: publicKey.toBase58(),
      from: from.toBase58(),
      to: to.toBase58(),
    }));
    await fs.writeFile(input.outFile, JSON.stringify(map, null, 2));
    console.log(`Wrote ${input.outFile}`);
  };
