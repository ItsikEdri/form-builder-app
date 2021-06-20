import React, {useState} from "react";
import { Button } from '@material-ui/core';

interface ICustomButton {    
    fieldName: string;
    onClickEvent: (fieldName: string) => any;
}

const CustomButton:React.FC<ICustomButton> = ({fieldName,onClickEvent}) => {
    
    return (
        <div>
           <Button fullWidth variant="outlined"  color="primary"  onClick={() => onClickEvent(fieldName)}>{fieldName}</Button>
        </div>
    );
}

export default CustomButton;