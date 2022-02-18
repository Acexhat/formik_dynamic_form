import * as React from 'react';
import { makeStyles } from '@mui/styles';
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(({
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

export default function Dateinput(props) {
    // const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const [value, setValue] = React.useState(props.value);
    const classes = useStyles();
    const handleChange = (value) => {
        setValue(value);
    };

    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                id="date-picker-dialog"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                helperText={props.helperText}
                error={props.error}
                value={value}
                classes={{
                    root: classes.feildRoot,
                    input: classes.input
                }}
                InputLabelProps={{ shrink: false }}
                onChange={(value) => { props.setFeildValue("dob", value.toDateString()); handleChange(value); }}
                KeyboardButtonProps={{
                    "aria-label": "change date"
                }}
            />
        </MuiPickersUtilsProvider>
    );
}
