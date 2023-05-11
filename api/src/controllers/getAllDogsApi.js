require('dotenv').config();
const { Dog } = require('../db');
const axios = require('axios');
const { API_URL, API_KEY } = process.env;


const getAllDogs = async () => {
    const response = await axios.get(`${API_URL}?api_key=${API_KEY}`); // api
    const database = await Dog; // models
    const dogs = response.data.map((dog) => {
        const { weight, height, name, image, life_span, temperament } = dog;
        return { weight, height, name, image, life_span, temperament };
    });
};

module.exports = getAllDogs;
