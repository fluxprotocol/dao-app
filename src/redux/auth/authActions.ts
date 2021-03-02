import createAuthContract from "../../services/contract/AuthContract";
import { setAuth, setAuthErrors, setAuthLoading } from "./auth"

export function loadAuth(accountId: string) {
    return async (dispatch: Function) => {
        try {
            dispatch(setAuthLoading(true));
            const contract = await createAuthContract();
            const canAuthenticate = await contract.canAuthenticate(accountId);
            dispatch(setAuth(canAuthenticate));
            dispatch(setAuthLoading(false));
        } catch(error) {
            dispatch(setAuthErrors(error));
            dispatch(setAuthLoading(false));
        }
    }
}

export function authUser(accountId: string) {
    return async (dispatch: Function) => {
        const contract = await createAuthContract();
        dispatch(setAuthLoading(true));
        await contract.addAuthenticatee(accountId);
        dispatch(setAuthLoading(false));
    }
}

export function checkUserAuth(accountId: string) {
    return async (dispatch: Function) => {
        const contract = await createAuthContract();
        dispatch(setAuthLoading(true));
        await contract.canAuthenticate(accountId);
        dispatch(setAuthLoading(false));
    }
}
