import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(({

}))

export default function CustomButton(props) {
    const classes = useStyles();
    return (
        <>
            <Button color={'primary'} variant={props.variant} type={props.type}>
                {props.name}
            </Button>
        </>
    );
}
