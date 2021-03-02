import React, { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import Dialog from '../../compositions/Dialog';
import trans from '../../translation/trans';
import AuthForm from './AuthForm';
import createDefaultAuthFormValues, { NewAuthFormValues } from './services/createDefaultAuthFormValues';

interface Props {
    canAuthenticate: boolean;
    onSubmit: (accountId: string) => void;
}


export default function AuthContainer({
    canAuthenticate,
    onSubmit
}: Props) {
    const history = useHistory();
    const [authFormValues, setAuthFormValues] = useState(createDefaultAuthFormValues);
    if (!canAuthenticate) return <div>{trans('auth.dialog.cannotAuthenticate')}</div>

    function handleAuthFormChange(values: NewAuthFormValues) {
        setAuthFormValues({
            accountId: values.accountId
        });
    }

    return (
        <Dialog 
            title={trans("auth.dialog.title")}
            open={true}
            onRequestClose={() => history.push("/")}
            onSubmitClick={() => onSubmit(authFormValues.accountId)}
        >
            <AuthForm
                onChange={handleAuthFormChange}
                values={authFormValues}
            />
        </Dialog>
    );
}