import React from 'react';
import AuthConnector from '../../connectors/AuthConnector';
import Page from '../../containers/Page';

export default function AuthPage() {
    return (
        <Page>
            <AuthConnector />
        </Page>
    );
}