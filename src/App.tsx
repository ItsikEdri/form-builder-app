import React, { Component, ReactElement, useContext, useEffect, useState } from 'react';
import { FilledInput, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';
import  InputMetaData  from './consts/InputMetaData';
import FormDisplay from  './components/FormDisplay';
import './App.css';
import { CustomTextField, CustomDatePicker, CustomButton, CustomCheckbox} from './componentsLibrary/LibarayFile';
import formService from './formService';
import { MyProvider, FormsContext } from './FormsContext';
import { setTimeout } from 'timers';


interface IFormField{
  id: number;
  name: string;
  component: React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
  order: number;
}

function App() {
  const formTemplate = {
    name: "",
    description: "",
    createdBy: "",
    updatedBy: "",
    hostingApps: [],
    category:"",
    fields: [{
      name: "",
      label:"",
      type:"",
      order: '0',
      mandatory: false,
      attributes: [{
        key: "",
        value:""
      }],
      style: [{
        key: "",
        value:""
      }],
      validation: [{
        regex: "",
        name:""
      }]
    }]
  };


  const [formName, setFormName] = useState('[Form Name]');
  const [category, setCategory] = useState('[Category]');
  const [description, setDescription] = useState('[Description]');

  //form details events
  const handleNameChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.name = event.target.value;
    setFormName(String(event.target.value));
  }
  const handleCategoryChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.category = event.target.value;
    setCategory(String(event.target.value));
  }
  const handleDescriptionChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.description = event.target.value;
    setDescription(String(event.target.value));
  }

  
  //element events
  const [fieldName, setFieldName] = useState('[fieldName]');
  
  const handleFieldNameChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.fields[0].name = event.target.value;
    setFieldName(String(event.target.value));
  }

  const handleFieldValueSelectEvent = (event: React.ChangeEvent<{name?: any; value: unknown; }>) => {
    console.log(event.target.value);
    if(typeof event.target.value === 'string'){
      formTemplate.fields[0].type = event.target.value;
    }
    setCurrentType(String(event.target.value));
  }

  const handleAttributeNameSelectEvent = (event: React.ChangeEvent<{name?: any; value: unknown; }>) => {
    if(typeof event.target.value === 'string'){
      formTemplate.fields[0].attributes[0].key = event.target.value;
    }
  }

  const handleAttributeNameChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.fields[0].attributes[0].value = event.target.value;
  }


  const handleStylePropertySelectEvent = (event: React.ChangeEvent<{name?: any; value: unknown; }>) => {
    if(typeof event.target.value === 'string'){
      formTemplate.fields[0].style[0].key = event.target.value;
    }
  }

  const handleStyleValueChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formTemplate.fields[0].style[0].value = event.target.value;
  }
  


  const handleValidationSelectEvent = (event: React.ChangeEvent<{name?: any; value: unknown; }>) => {
    if(typeof event.target.value ===  'string'){
        formTemplate.fields[0].validation[0].name = event.target.value;
    }
  }

  const [currentComp, setCurrentComp] = useState<IFormField[]>([]);
  const [currentType, setCurrentType] = useState('text');
  

  const handleAddFieldBtnClickEvent = (fieldType: string) => {
    //add field to form
    console.log('adding ' + fieldType + ' to form')
    switch (fieldType) {
      case "text": setCurrentComp([...currentComp,{ id: 0, name:"dfg", component:<CustomTextField fieldName={fieldName} />, order:0}]);
        break;
      case "datePicker": setCurrentComp([...currentComp, { id: 0, name:"dfg",  component:<CustomDatePicker fieldName = { fieldName } />, order:0}]);
       break;
    case "button": setCurrentComp([...currentComp,{ id: 0, name:"dfg",  component: <CustomButton fieldName={fieldName} onClickEvent={(fieldName: string) => alert('button ' + fieldName + ' clicked \n you can interact with the change event like this example')}  />, order:0}]);
      break;
    case "checkBox": setCurrentComp([...currentComp ,{ id: 0, name:"dfg",  component:<CustomCheckbox fieldName={fieldName} onChangeEvent={(checked: boolean) => alert(checked +' to '+ !checked +'\n you can interact with the change event like this example')} />, order:0}]);
        break;
   }

    //send to formDisplay
  }
  const handleAddAttrClickEvent = () => {
    //add attributes to field
  }
  const handleAddStyleClickEvent = () => {
    //add style to field
    
  }
  const handleAddValidationClickEvent = () => {
    //add validation type to field
    
  }

  const handleCreateFormClickEvent = async () => {
    //add field to form
    const response = await formService.createForm(formTemplate);
    console.log(response);
  }

  // const getComponent = () => {

  // }

  return (
    <MyProvider>
    <div className="App container">
      <h1>Form Generator</h1>
      <p>Forms Builder Tool - Easy to use!</p>
      <hr className="green-box"/>
      <div className="row">
        <div className="col-md">
        <div>
          <h4>Form Details</h4>
            <FormControl fullWidth>
              <InputLabel children="Form Name:" />
              <FilledInput fullWidth required name="name" onChange={(event) => handleNameChangeEvent(event)} />
            </FormControl>
            <FormControl fullWidth className="space-up">
              <InputLabel children="Category:" />
              <FilledInput fullWidth required name="category" onChange={(event) => handleCategoryChangeEvent(event)} />
            </FormControl>
            <FormControl fullWidth className="space-up">
              <InputLabel children="Description:" />
              <FilledInput fullWidth  name="description" onChange={(event) => handleDescriptionChangeEvent(event)} />
            </FormControl>
        </div>

    
        <div className="space-up">
          <h4>Add Elements</h4>
          <FormControl fullWidth className="space-up">
            <InputLabel children="Field Name:" />
            <FilledInput fullWidth required name="fieldName" onChange={(event) => handleFieldNameChangeEvent(event)} />
          </FormControl>

          <FormControl fullWidth className="space-up">
            <InputLabel children="Fields Type:" />
            <Select  name="fieldType" onChange={(event) => handleFieldValueSelectEvent(event)}>
              {InputMetaData.fields.map((field, index) => {
                return <MenuItem key={index} value={field}>{field}</MenuItem >
              })}
            </Select>
          </FormControl>



              

     <div className="hide"> 
          <FormControl fullWidth className="space-up white-text">
            <InputLabel children="Add Attributes Name:" />
            <Select  name="attributeName" onChange={(event) => handleAttributeNameSelectEvent(event)}>
              {InputMetaData.attributes.map((attr, index) => {
                return <MenuItem key={index} value={attr}>{attr}</MenuItem >
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth className="space-up">
            <InputLabel children="Add Attributes Value:" />
            <FilledInput fullWidth name="attributeValue" onChange={(event) => handleAttributeNameChangeEvent(event)} />
          </FormControl>

          <button type="button" className="btn btn-primary space-up fullwidth" onClick={() => handleAddAttrClickEvent()}>Add Attribute</button>


              







          <FormControl fullWidth className="space-up white-text">
            <InputLabel children="Add Style Property:" />
            <Select  name="styleProp" onChange={(event) => handleStylePropertySelectEvent(event)}>
              {InputMetaData.style.map((prop, index) => {
                return <MenuItem key={index} value={prop}>{prop}</MenuItem >
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth className="space-up">
            <InputLabel children="Add Style Value:"  />
            <FilledInput fullWidth name="styleValue" onChange={(event) => handleStyleValueChangeEvent(event)} />
          </FormControl>

          <button type="button" className="btn btn-primary space-up fullwidth" onClick={() => handleAddStyleClickEvent()}>Add Style</button>


          <FormControl fullWidth className="space-up">
            <InputLabel children="Add Validation Type:" />
            <Select  name="validation" onChange={(event) => handleValidationSelectEvent(event)}>
              {InputMetaData.validations.map((validation, index) => {
                return <MenuItem key={index} value={validation}>{validation}</MenuItem>
              })}
            </Select>
          </FormControl>
          
          <button type="button" className="btn btn-primary space-up fullwidth" onClick={() => handleAddValidationClickEvent()}>Add Validation</button>
        </div>
        </div>
        <button type="button" className="btn btn-danger space-up fullwidth" onClick={() => handleAddFieldBtnClickEvent(currentType)}>Add Field</button>
      </div>
        <div className="col-md">
          <FormDisplay  components={currentComp} formName={formName} category={category} description={description} selected={currentComp} /> 
        </div>
    </div> 
    <div className="row">
      <button type="button" className="btn btn-success space-up" onClick={() => handleCreateFormClickEvent()}>Create Form</button> 
    </div>
    </div>
    </MyProvider>
  );
}

export default App;


