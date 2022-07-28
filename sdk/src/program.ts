import * as anchor from "@j0nnyboi/anchor";

import { GraphProgram, IDL } from "../../target/types/graph_program";

export const PROGRAM_ID = "GrPHw4qAadztUYJBtzvLAhiv6oZKCVDLH2cctwKehEKq";
export { IDL, GraphProgram } from "../../target/types/graph_program";

export const getGraphProgram = (provider: anchor.AnchorProvider): anchor.Program<GraphProgram> =>
  new anchor.Program(IDL, PROGRAM_ID, provider);
