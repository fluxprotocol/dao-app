import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import trans from '../../../translation/trans';
import {NewAuthFormValues} from '../services/createDefaultAuthFormValues';


interface Props {
    onChange: (values: NewAuthFormValues) => void;
    values: NewAuthFormValues;
}


export default function AddTokenWhitelist({
    onChange,
    values
}: Props) {

    function handleAccountIdChange(event: ChangeEvent<HTMLInputElement>) {
        onChange({
            accountId: event.currentTarget.value,
        });
    }

    return (
        <div>
            <div>
                <TextField
                    label={trans('auth.form.input.accountId')}
                    onChange={handleAccountIdChange}
                    value={values.accountId}
                />
            </div>
        </div>
    );
}