pub mod constants;
pub mod instructions;
pub mod state;

use anchor_lang::prelude::*;

use instructions::*;

declare_id!("GrPHw4qAadztUYJBtzvLAhiv6oZKCVDLH2cctwKehEKq");

#[program]
pub mod graph_program {
    use super::*;

    pub fn admin_make_connection(
        ctx: Context<AdminMakeConnection>,
        from: Pubkey,
        to: Pubkey,
    ) -> Result<()> {
        instructions::admin_make_connection(ctx, from, to)
    }

    pub fn make_connection(ctx: Context<MakeConnection>, to: Pubkey) -> Result<()> {
        instructions::make_connection(ctx, to)
    }

    pub fn revoke_connection(ctx: Context<RevokeConnection>, _bump: u8, _to: Pubkey) -> Result<()> {
        instructions::revoke_connection(ctx)
    }

    pub fn close_connection(ctx: Context<CloseConnection>, _bump: u8, _to: Pubkey) -> Result<()> {
        instructions::close_connection(ctx)
    }
}
