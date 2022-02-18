import React from 'react';
import useStyles from './loginStyle';
import { Navigate, useNavigate, } from 'react-router';
import Customcard from '../../Components/Card';
import InputBox from '../../Atomic/inputBox';
import CustomButton from '../../Atomic/button';
import { useFormik } from 'formik';
import { Typography } from '@material-ui/core';
import { validationSchema } from './validationSchema';

const inputBoxes = [
    {
        name: "Email/User",
        type: "String",
        id: "email",
        label: "Email",
        value: "email"
    },
    {
        name: "Password",
        type: "password",
        id: "password",
        label: "password",
        value: "password"
    }
]

const Login = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            navigate('/create')
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={classes.root}>
            <Customcard>
                <Typography
                    classes={{
                        root: classes.headerTitle
                    }}
                    variant="h5"> LOGIN FORM </Typography>
                {inputBoxes?.map((elem) => {
                    return (
                        <InputBox
                            title={elem.name}
                            type={elem.type}
                            id={elem.id}
                            label={elem.label}
                            value={formik.values[elem.value]}
                            onChange={formik.handleChange}
                            error={formik.touched[elem.value] && Boolean(formik.errors[elem.value])}
                            helperText={formik.touched[elem.value] && formik.errors[elem.value]}
                        />
                    )
                })}
                <CustomButton name={"Login"} variant={"contained"} type={"submit"} />
            </Customcard>
        </form>
    )
}

export default Login
