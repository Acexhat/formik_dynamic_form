import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles(({
    container: {
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flexGrow: "0.05"
    },
    TypoRoot: {
        marginBottom: "0.25rem",
        fontFamily: "serif",
        marginRight: "30%"
    },
    feildRoot: {
        width: "40%",
        "& .MuiOutlinedInput-notchedOutline": {
            backgroundColor: "red",
            opacity: "0.13",
        },
        "& .MuiOutlinedInput-root":{
            borderRadius:"1rem",
        }

    },
    input: {
    }
}))

export default function InputBox(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography classes={{
                root: classes.TypoRoot
            }}>{props.title}</Typography>
            <TextField
                InputLabelProps={{ shrink: false }}
                classes={{
                    root: classes.feildRoot,
                    input: classes.input
                }}
                type={props?.type}
                id={props.id}
                variant="outlined"
                value={props.value}
                onChange={props.onChange}
                error={props.error}
                helperText={props.helperText}
            // label={props.label}
            />
        </div>
    );
}
