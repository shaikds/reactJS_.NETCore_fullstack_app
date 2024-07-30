/* eslint-disable no-template-curly-in-string */
import axios from 'axios';

const baseURL = 'http://localhost:5028/api/settlements';

const settlementService = {
    getAllSettlements: async () => {
        const response = await axios.get(`${baseURL}/GetAllSettlements`);
        return response.data;
    },
    addSettlement: async (settlement) => {
        const response = await axios.post(baseURL, settlement);
        return response.data;
    },
    updateSettlement: async (name, settlement) => {
        const response = await axios.put(`${baseURL}/${name}`, settlement);
        return response.data;
    },
    removeSettlement: async (name) => {
        const response = await axios.delete(`${baseURL}/${name}`);
        return response.data;
    },
};

export default settlementService;
