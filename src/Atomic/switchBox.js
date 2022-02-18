import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioBox(props) {
    const [value, setValue] = React.useState(props.value);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl>
            <RadioGroup
                row
                name={props.name}
                value={value}
                onChange={(e) => { props.onChange(e); handleChange(e); }}
                error={props.error}
                helperText={props.helperText}
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
        </FormControl >
    );
}
