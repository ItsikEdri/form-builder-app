import React from "react";
import Input from "../consts/InputMetaData";
import { FilledInput, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';

interface IAddElements {
  initialState: {
    attributes:{
      name: string;
      value: string;
    }   
    validation: {
      name: string;
      value: string;
    } 
    fields: {
      name: string;
      value: string;
    }
}
  setAddElements: React.Dispatch<React.SetStateAction<{
     attributes:{
      name: string;
      value: string;
    }   
    validation: {
      name: string;
      value: string;
    } 
    fields: {
      name: string;
      value: string;
    }
}>>
}

const AddElements: React.FC<IAddElements> = ({ initialState, setAddElements }) => {

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setAddElements({ ...initialState, [name]: value });
  }

  const handleSelectEvent = (event: React.ChangeEvent<{
    name?: any;
    value: unknown;
  }>) => {
    console.log(event.target.value)
    const { name, value } = event.target;
    console.log({ [name]: value })
    if(name){
      setAddElements({ ...initialState, [name]: value });
    }
    
  }

  return (
    <div>
      <hr className="green-box" />
      <h4>Add Elements</h4>
      <FormControl fullWidth className="space-up">
        <InputLabel children="Field Name:" />
        <FilledInput fullWidth name="name" onChange={(event) => handleChangeEvent(event)} />
      </FormControl>






      <FormControl fullWidth className="space-up">
        <InputLabel children="Fields Type:" />
        <Select value={initialState.fields.value} name="fields">
          {Input.fields.map((field, index) => {
            return <MenuItem key={index} value={field}>{field}</MenuItem >
          })}
        </Select>
      </FormControl>

      <FormControl fullWidth className="space-up white-text">
        <InputLabel children="Add Attributes Name:" />
        <Select value={initialState.attributes.value} name="attributes">
          {Input.attributes.map((field, index) => {
            return <MenuItem key={index} value={field}>{field}</MenuItem >
          })}
        </Select>
      </FormControl>








      <FormControl fullWidth className="space-up">
        <InputLabel children="Add Attributes Value:" />
        <FilledInput fullWidth name="attributes" onChange={(event) => handleChangeEvent(event)} />
      </FormControl>

      <FormControl fullWidth className="space-up">
        <InputLabel children="Add Style Name:" />
        <FilledInput fullWidth name="styleName" onChange={(event) => handleChangeEvent(event)} />
      </FormControl>

      <FormControl fullWidth className="space-up">
        <InputLabel children="Add Style Value:" />
        <FilledInput fullWidth name="styleValue" onChange={(event) => handleChangeEvent(event)} />
      </FormControl>

      <FormControl fullWidth className="space-up">
        <InputLabel children="Add Validation Name:" />
        <Select value={initialState.validation.value} name="validation" onChange={(event) => handleSelectEvent(event)}>
          {Input.validations.map((field, index) => {
            return <MenuItem key={index} value={field}>{field}</MenuItem>
          })}
        </Select>
      </FormControl>

      <button type="button" className="btn btn-success space-up">add</button>
      <hr className="green-box" />
    </div>
  );
}

export default AddElements;