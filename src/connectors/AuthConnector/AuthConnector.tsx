import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthDialog from '../../containers/AuthDialog';
import { loadAuth } from '../../redux/auth/authActions';
import { Reducers } from '../../redux/reducers';

export default function CouncilConnector() {
    const dispatch = useDispatch();
    const auth = useSelector((store: Reducers) => store.auth.canAuthenticate);
    const accountInfo = useSelector((store: Reducers) => store.account.account);

    useEffect(() => {
        if (!accountInfo) return
        dispatch(loadAuth(accountInfo.accountId));
    }, [accountInfo]);
    

    return (
        <AuthDialog canAuthenticate={auth}/>
    );
}