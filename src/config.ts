import BN from "bn.js";

export const API_URL = process.env.REACT_APP_API_URL || '';
export const NULL_CONTRACT = 'null_address.near';
export const MAX_GAS = new BN("100000000000000");
export const DAO_ACCOUNT_ID = process.env.REACT_APP_DAO_ACCOUNT_ID || '';
export const AUTH_ACCOUNT_ID = process.env.REACT_APP_AUTH_ACCOUNT_ID || '';
export const STORAGE_BASE = new BN('30000000000000000000000');
export const FLUX_MARKET_DETAIL_URL = process.env.REACT_APP_FLUX_MARKET_DETAIL_URL || '';