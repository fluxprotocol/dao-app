import React from 'react';
import { Link } from 'react-router-dom';
import { Account } from '../../models/Account';
import { routePaths } from '../../routes';
import trans from '../../translation/trans';

interface Props {
    onLoginClick: () => void;
    onLogoutClick: () => void;
    account: Account | null;
}

export default function Menu({
    onLoginClick,
    onLogoutClick,
    account,
}: Props) {
    return (
        <section>
            {!account && (
                <button onClick={onLoginClick}>{trans('menu.login')}</button>
            )}

            {account && (
                <>
                    <span>{trans('menu.loggedInAs', { accountId: account.accountId })}</span>
                    <button onClick={onLogoutClick}>{trans('menu.logout')}</button>
                </>
            )}

            <Link to={routePaths.root()}>{trans('menu.item.home')}</Link>
            <Link to={routePaths.council()}>{trans('menu.item.council')}</Link>

            {account &&(
                <Link to={routePaths.auth()}>{trans('menu.item.auth')}</Link>
            )}
        </section>
    );
}