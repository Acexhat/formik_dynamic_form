import React from 'react';
import useStyles from './style';
import Paper from "@material-ui/core/Paper";
const Customcard = ({ children }) => {
    const classes = useStyles();
    return (
        <Paper elevation={10}
            classes={{
                root: classes.paperRoot
            }}
        >
            {children}
        </Paper>
    )
}

export default Customcard
