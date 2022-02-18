import React from 'react';
import useStyles from './formStyle';

const CustomForm = ({ children }) => {
    const classes = useStyles();
    return (
        <form onSubmit={props.handleSubmit} className={classes.root}>
            {children}
        </form>
    )
}

export default CustomForm
