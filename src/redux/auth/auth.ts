import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = Readonly<{
    canAuthenticate: boolean;
    loading: boolean;
    errors: string[];
}>;

const initialState: AuthState = {
    canAuthenticate: false,
    loading: true,
    errors: []
};

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setAuth(state: AuthState, action: PayloadAction<boolean>): AuthState {
            return ({
                ...state,
                canAuthenticate: action.payload,
            });
        },
        setAuthLoading(state: AuthState, action: PayloadAction<boolean>): AuthState {
            return ({
                ...state,
                loading: action.payload,
            });
        },
        setAuthErrors(state: AuthState, action: PayloadAction<string[]>): AuthState {
            return ({
                ...state,
                errors: action.payload,
            });
        },
    },
});

export const {
    setAuth,
    setAuthErrors,
    setAuthLoading,
} = authSlice.actions;

export default authSlice.reducer;
