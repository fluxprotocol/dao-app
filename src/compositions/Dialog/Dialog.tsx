import React, { PropsWithChildren } from 'react';
import { default as MuiDialog } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '../../components/Button';

import s from './Dialog.module.scss';
import trans from '../../translation/trans';

interface Props {
    title: string;
    open: boolean;
    onRequestClose: () => void;
    onSubmitClick: () => void;
}

export default function Dialog({
    title,
    children,
    open,
    onRequestClose,
    onSubmitClick,
}: PropsWithChildren<Props>) {
    return (
        <MuiDialog open={open} classes={{ paper: s.paper }}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button className={s.cancelButton} onClick={onRequestClose}>
                    {trans('global.action.cancel')}
                </Button>
                <Button className={s.confirmButton} onClick={onSubmitClick}>
                    {trans('global.action.submit')}
                </Button>
            </DialogActions>
        </MuiDialog>
    );
}
