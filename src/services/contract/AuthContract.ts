import BN from "bn.js";
import { Account, Contract } from "near-api-js";
import { AUTH_ACCOUNT_ID, MAX_GAS, STORAGE_BASE } from "../../config";
import { Proposal } from "../../models/Proposal";
import { connectWallet } from "../WalletService";

class AuthInstance {
    contract: Contract;

    constructor(account: Account) {
        this.contract = new Contract(account, AUTH_ACCOUNT_ID, {
            viewMethods: ['is_authenticated', 'can_authenticate'],
            changeMethods: ['add_authenticatee'],
        });
    }

    async isAuthenticated(): Promise<string[]> {
        // @ts-ignore
        const result = await this.contract.is_authenticated({account_id: "fluxio.near"});

        return result;
    }

    async canAuthenticate(accountId: string): Promise<boolean> {
        console.log(accountId)
        // @ts-ignore
        const result = await this.contract.can_authenticate({account_id: "flipper.near"});
        console.log(result)

        return result;
    }

    async addAuthenticatee(accountId: string) {
        // @ts-ignore
        const result = await this.contract.add_authenticatee({ 
            account_id: "fluxio.near"
        }, MAX_GAS, new BN(0))

        return result;
    }
}


let authInstance: AuthInstance;

export default async function createAuthContract(): Promise<AuthInstance> {
    if (authInstance) {
        return authInstance;
    }

    const wallet = await connectWallet();
    authInstance = new AuthInstance(wallet.account());

    return authInstance;
}
