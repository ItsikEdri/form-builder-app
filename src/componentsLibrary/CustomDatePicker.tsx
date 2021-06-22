import React, {useState} from "react";
import { TextField } from '@material-ui/core';
 
interface ICustomDatePicker {    
    fieldName: string
}

const CustomDatePicker:React.FC<ICustomDatePicker> = ({fieldName}) => {
    const [InputValue, setInputValue] = useState('');
    return (
        <div>
            <TextField
                id="date"
                label={fieldName}
                type="date"
                className="fullwidth"
                defaultValue="1976-10-01"
                InputLabelProps={{
                shrink: true,
                }}
            />
        </div>
    );
}

export default CustomDatePicker;