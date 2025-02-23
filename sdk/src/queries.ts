import { ACCOUNT_DISCRIMINATOR_SIZE, web3 } from "@j0nnyboi/anchor";
import * as anchor from "@j0nnyboi/anchor";
import { GraphProgram } from "../../target/types/graph_program";

export const getProgramAccountsFrom = (
  from: web3.PublicKey,
  program: anchor.Program<GraphProgram>
) =>
  program.account.connectionV2.all([
    {
      memcmp: {
        offset: ACCOUNT_DISCRIMINATOR_SIZE,
        bytes: from.toBase58(),
      },
    },
  ]);

export const getProgramAccountsTo = (
  to: web3.PublicKey,
  program: anchor.Program<GraphProgram>
) =>
  program.account.connectionV2.all([
    {
      memcmp: {
        offset: ACCOUNT_DISCRIMINATOR_SIZE + 32,
        bytes: to.toBase58(),
      },
    },
  ]);
