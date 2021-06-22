import axios from 'axios';

const BASE_URL = "http://localhost:8000/gateway/forms"

axios.defaults.headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGM1Y2RjYzhhMmE0MTAwM2ExYmIwMjUiLCJpYXQiOjE2MjM1NzYwODEsImV4cCI6MTYyNjE2ODA4MX0.IreeUXY6uTtoknVbe0Df5nqNlKRKU0esxa_rIc2N8_Y'
}

const formService = {
    getForm: async (id: string) => {
        const {data} = await axios.get(`${BASE_URL}`);
        console.log(JSON.stringify([id]));
        console.log(data);
    },
    deleteForm: async (id: string) => {
        const {data} = await axios.delete(`${BASE_URL}/${id}`);
        console.log(JSON.stringify([id]));
        console.log(data);
    },
    createForm: async (formBody: any) => {
        const {data} = await axios.post(`${BASE_URL}`, formBody);
        console.log(JSON.stringify([formBody, data], null, 2));
        console.log(data);
    },
    updateForm: async (id: string, formBody: any) => {
        const {data} = await axios.put(`${BASE_URL}/${id}`, formBody);
        console.log(JSON.stringify([id, formBody], null, 2));
        console.log(data);
    },
    cloneForm: async (id: string) => {
        const {data} = await axios.put(`${BASE_URL}/${id}`);
        console.log(JSON.stringify([id], null, 2));
        console.log(data);
    }
}

export default formService