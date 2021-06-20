import React, {useState} from "react";
import { FormControlLabel, Checkbox } from '@material-ui/core';

interface ICustomCheckbox {    
    fieldName: string;
    onChangeEvent: (checked: boolean) => any;
}

const CustomCheckbox:React.FC<ICustomCheckbox> = ({fieldName,onChangeEvent}) => {
    const[state,setState] = React.useState({
        checked:false,
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [event.target.name]: event.target.checked});
        onChangeEvent(state.checked);
    }
    return (
        <div>
             <FormControlLabel control={<Checkbox checked={state.checked} onChange={handleChange} name="checked" color="primary" />} label={fieldName} />
        </div>
    );
}

export default CustomCheckbox;