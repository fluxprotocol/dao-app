import {
    Near,
    connect,
    WalletConnection,
    keyStores,
} from "near-api-js";

import { NULL_CONTRACT } from '../config';

export interface ConnectConfig {
    accountId?: string;
    nearInstance?: Near,
    walletInstance?: WalletConnection,
    customNodeUrl?: string
}

interface NetworkConfig {
    networkId: string,
    nodeUrl: string,
    contractName: null,
    walletUrl: string,
    initialBalance: string
}

export function getNetworkConfig(networkName: string, nodeUrl?: string): NetworkConfig {
    let network: NetworkConfig;

    switch (networkName) {
        default:
            network = {
                networkId: 'testnet',
                nodeUrl: nodeUrl || 'https://rpc.testnet.near.org',
                contractName: null,
                walletUrl: 'https://wallet.testnet.near.org',
                initialBalance: "100000000"
            };
    }

    return network;
}

let nearInstance: Near;

export async function connectNear() {
    if (nearInstance) {
        return nearInstance;
    }

    const networkConfig = getNetworkConfig('testnet');
    nearInstance = await connect({
        ...networkConfig,
        deps: {
            keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        }
    });

    return nearInstance;
}

let walletConnection: WalletConnection;

export async function connectWallet(): Promise<WalletConnection> {
    if (walletConnection) {
        return walletConnection;
    }

    const near = await connectNear();

    walletConnection = new WalletConnection(near, NULL_CONTRACT);
    return walletConnection;
}
