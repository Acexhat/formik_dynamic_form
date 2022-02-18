import React from 'react';
import useStyles from './createStyle';
import { useNavigate } from 'react-router';
import Customcard from '../../Components/Card';
import HorizontalInputBox from '../../Atomic/horizontalInputBox';
import CustomButton from '../../Atomic/button';
import { useFormik } from 'formik';
import Grid from '@mui/material/Grid';
import { validationSchema } from '../../utils/validationSchema';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from '../../Store/Actions/formActions';

const inputBoxes = [
    {
        name: "First Name",
        type: "String",
        id: "firstName",
        label: "firstName",
        value: "firstName",
        comp: "TextField"
    },
    {
        name: "Last Name",
        type: "String",
        id: "lastName",
        label: "lastName",
        value: "lastName",
        comp: "TextField"
    },
    {
        name: "Email/User",
        type: "String",
        id: "email",
        label: "Email",
        value: "email",
        comp: "TextField"
    },
    {
        name: "Mobile No",
        type: "Integer",
        id: "mobile",
        label: "mobile",
        value: "mobile",
        comp: "TextField"
    },
    {
        name: "Date Of Birth",
        type: "String",
        id: "dob",
        label: "dob",
        value: "dob",
        comp: "DateInput"
    },
    {
        name: "Gender",
        type: "String",
        id: "gender",
        label: "gender",
        value: "gender",
        comp: "RadioBox"
    }
]

const CreateBox = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialDate = new Date('2021-08-18T21:11:54');

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            mobile: '',
            dob: initialDate.toDateString(),
            gender: "female"
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(setFormData(values));
            navigate('/display')
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={classes.root}>
                <Customcard>
                    <Typography
                        classes={{
                            root: classes.headerTitle
                        }}
                        variant="h5"> CREATE A FORM </Typography>
                    <Grid container spacing={2} classes={{
                        root: classes.gridroot
                    }}>
                        {inputBoxes?.map((elem) => {
                            return (
                                <Grid key={elem.id} item xs={5}>
                                    <HorizontalInputBox
                                        title={elem.name}
                                        type={elem.type}
                                        id={elem.id}
                                        label={elem.label}
                                        comp={elem.comp}
                                        value={formik.values[elem.value]}
                                        onChange={formik.handleChange}
                                        setFeildValue={formik.setFieldValue}
                                        error={formik.touched[elem.value] && Boolean(formik.errors[elem.value])}
                                        helperText={formik.touched[elem.value] && formik.errors[elem.value]}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <CustomButton name={"Submit"} variant={"contained"} type={"submit"} />
                </Customcard>
            </form>
        </>
    )
}

export default CreateBox;
