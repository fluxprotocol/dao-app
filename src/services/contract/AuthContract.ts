import BN from "bn.js";
import { Account, Contract } from "near-api-js";
import { AUTH_ACCOUNT_ID, MAX_GAS, STORAGE_BASE } from "../../config";
import { Proposal } from "../../models/Proposal";
import { connectWallet } from "../WalletService";

class AuthContract {
    contract: Contract;

    constructor(account: Account) {
        this.contract = new Contract(account, AUTH_ACCOUNT_ID, {
            viewMethods: ['is_authenticated', 'can_authenticate'],
            changeMethods: ['add_authenticatees'],
        });
    }

    async isAuthenticated(accountId: string): Promise<boolean> {
        // @ts-ignore
        const result = await this.contract.is_authenticated({account_id: accountId});

        return result;
    }

    async canAuthenticate(accountId: string): Promise<boolean> {
        // @ts-ignore
        const result = await this.contract.can_authenticate({account_id: accountId});

        return result;
    }

    async addAuthenticatees(accountId: string[]) {
        // @ts-ignore
        const result = await this.contract.add_authenticatees({ 
            account_ids: accountId
        }, MAX_GAS, new BN(0))

        return result;
    }
}


let authContract: AuthContract;

export default async function createAuthContract(): Promise<AuthContract> {
    if (authContract) {
        return authContract;
    }

    const wallet = await connectWallet();
    authContract = new AuthContract(wallet.account());

    return authContract;
}
