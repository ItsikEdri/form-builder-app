import { Store } from 'react-stores';

export interface IFormStoreState {
    name: string,
    description: string,
    createdBy: string,
    updatedBy: string,
    hostingApps: [],
    category:string,
      fields: [{
        id: string,
        name: string,
        order: 0,
        mandatory: boolean,
        attributes: [{
          key: string,
          value: string
        }],
        style: [{
          key: string,
          value: string
        }],
        validation: [{
          id: string,
          regex: string
        }]
      }]
}

export const formStore = new Store<IFormStoreState>({
    name: "",
    description: "",
    createdBy: "",
    updatedBy: "",
    hostingApps: [],
    category: "",
      fields: [{
        id: "",
        name: "",
        order: 0,
        mandatory: false,
        attributes: [{
          key: "",
          value: ""
        }],
        style: [{
          key: "",
          value: ""
        }],
        validation: [{
          id: "",
          regex: ""
        }]
      }]
});