require('dotenv').config();
const { API_URL, API_KEY } = process.env;
const axios = require('axios');
const { Temperaments } = require('../db');

const getTemperamentData = async (req,res) => {
    const { data } = await axios(`${API_URL}`);
    try {
        let temperaments = data.map((dog) => {
            return dog.temperament? dog.temperament.split(",") : dog.temperament;
        });
        temperaments = temperaments.flat();
        temperaments = temperaments.filter(temperament => temperament != null);
        temperaments = [...new Set(temperaments)];
        for(let i = 0; i < temperaments.length; i++){
            await Temperaments.findOrCreate({
                where: {name: temperaments[i]}
            });
        }

        res.status(200).json(temperaments);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getTemperamentData
}