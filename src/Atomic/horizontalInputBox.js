import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, TextField } from '@material-ui/core';
import { components } from '../utils/components';
const useStyles = makeStyles(({
    container: {
        width: "100%",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
    },
    TypoRoot: {
        marginBottom: "0.25rem",
        fontFamily: "serif",
    },
    feildRoot: {
        width: "68%",
        "& .MuiOutlinedInput-notchedOutline": {
            backgroundColor: "red",
            opacity: "0.13",
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: "1rem",
        }

    },
    input: {
    }
}))

export default function HorizontalInputBox(props) {
    const classes = useStyles();
    const InnerComponent = components[props.comp];
    const onChangeData = (e) => {
        console.log(e);
    }
    return (
        <div className={classes.container}>
            <Typography classes={{
                root: classes.TypoRoot
            }}>{props.title}</Typography>
            <InnerComponent
                InputLabelProps={{ shrink: false }}
                classes={{
                    root: classes.feildRoot,
                    input: classes.input
                }}
                type={props?.type}
                id={props.id}
                variant="outlined"
                value={props.value}
                setFeildValue={props.setFeildValue}
                onChange={props.onChange}
                // onChange={onChangeData}
                error={props.error}
                helperText={props.helperText}
            />
        </div>
    );
}
