import React from 'react';
import useStyles from './displayStyle';
import { useNavigate } from 'react-router';
import Customcard from '../../Components/Card';
import { Typography } from '@mui/material';
import TableDisplay from '../../Components/Table';
import CustomButton from '../../Atomic/button';
import { Link } from 'react-router-dom';

const Display = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Customcard>
                <div className={classes.header}>
                    <Typography
                        classes={{
                            root: classes.headerTitle
                        }}
                        variant="h5"> TABLE DISPLAY </Typography>
                </div>
                <TableDisplay />
                <Link to='/create'>
                    <CustomButton name={"Create New Data"} variant={"contained"} type={"submit"} />
                </Link>
            </Customcard>
        </div>
    )
}

export default Display;
