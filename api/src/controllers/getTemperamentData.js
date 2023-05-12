require('dotenv').config();
const { API_URL, API_KEY } = process.env;
const axios = require('axios');


const getTemperamentData = (req,res) => {
    const { data } = axios(`${API_KEY}`);
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getTemperamentData
}