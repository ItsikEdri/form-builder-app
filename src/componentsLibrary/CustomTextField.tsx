import React, {useState} from "react";
import { TextField } from '@material-ui/core';

interface ICustomTextField {
    fieldName: string
  }

const CustomTextField:React.FC<ICustomTextField> = ({fieldName}) => {
    const [InputValue, setInputValue] = useState('');
    return (
        <div>
            <TextField variant="outlined" label={fieldName} fullWidth value={InputValue} onChange={(event) => setInputValue(event.target.value)}/>
        </div>
    );
}

export default CustomTextField;