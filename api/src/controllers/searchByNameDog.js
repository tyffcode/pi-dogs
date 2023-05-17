require('dotenv').config();
const { Sequelize } = require('sequelize');
const { API_URL, API_KEY } = process.env;
const { Dog } = require('../db');
const axios = require('axios');

const searchByNameDog = async (req, res) => {
  try {
    const { name } = req.query;

    // Search in the API
    const { data } = await axios(`${API_URL}?api_key=${API_KEY}`);
  
    // Search in the database
    const dbDogs = await Dog.findAll({
    where: Sequelize.where(
      Sequelize.fn('LOWER', Sequelize.col('name')),
      'LIKE',
      `%${name.toLowerCase()}%`
      ),
    });
    
    const dogs = data
      .map((dog) => ({
        id: dog.id,
        weight: dog.weight.metric,
        height: dog.height.metric,
        name: dog.name,
        image: dog.image.url,
        life_span: dog.life_span,
        temperaments: dog.temperament,
      })
    );
    
    if (dogs.length === 0) {
      return res.status(404).json({ message: 'No dog breeds found.' });
    }
    
    res.status(200).json(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
    searchByNameDog,
}