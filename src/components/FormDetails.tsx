import React, { useState } from "react";
import { FilledInput, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';
import { useStore } from 'react-stores';
import { formStore } from '../store';

// The interface is here to declare the props of the component.
// as a regular TypeScript behavior, you can use "?" in order to make a prop optional
// I think you should think about using an interface to initiate the state in the father component >>
// e.g IFormDetailsParams {name: string, category: string, description: string} AND THEN useState<IFormDetailsParams>
interface IFormDetails {
  initialState: {};
  setFormDetails: React.Dispatch<React.SetStateAction<{}>>;
}


const FormDetails:React.FC<IFormDetails> = ({initialState, setFormDetails}) => {
  const handleNameChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormDetails({ ...initialState, [name]: value });
  }
  const handleCategoryChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormDetails({ ...initialState, [name]: value });
  }
  const handleDescriptionChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormDetails({ ...initialState, [name]: value });
  }
  return (
    <div>
    <h4>Form Details</h4>
      <FormControl fullWidth>
        <InputLabel children="Form Name:" />
        <FilledInput fullWidth name="name" onChange={(event) => handleNameChangeEvent(event)} />
      </FormControl>
      <FormControl fullWidth className="space-up">
        <InputLabel children="Category:" />
        <FilledInput fullWidth name="category" onChange={(event) => handleCategoryChangeEvent(event)} />
      </FormControl>
      <FormControl fullWidth className="space-up">
        <InputLabel children="Description:" />
        <FilledInput fullWidth name="description" onChange={(event) => handleDescriptionChangeEvent(event)} />
      </FormControl>
          <hr/>
    </div>
  );
}

export default FormDetails;