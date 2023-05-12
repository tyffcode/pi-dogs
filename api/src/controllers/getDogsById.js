require('dotenv').config();
const { API_URL, API_KEY } = process.env;
const axios = require('axios');

const { Dog } = require('../db');
const { filterDataDogs } = require('../controllers/filterDataDogs');

const getDogsById = async (req, res) => {
    const { id } =  req.params;
    try {
        const { data } = await axios(`${API_URL}?api_key=${API_KEY}`);
        const dog =  data.find((dog) => dog.id === +id);
        
        if (dog) {
          res.status(200).json(dog);
        } else {
          res.status(404).json({ error: 'Perro no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getDogsById
};