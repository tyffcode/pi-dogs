require('dotenv').config();
const { API_URL, API_KEY } = process.env;
const axios = require('axios');


const filterDataDogs = async (req,res) => {
    try {
        const { data } = await axios(`${API_URL}?api_key=${API_KEY}`);
        
        const dogs = data.map((dog) => {
            const dogsData = [];
            dogsData.push({ 
                id: dog.id,
                weight: dog.weight.metric,
                height: dog.height.metric, 
                name: dog.name, 
                image: dog.image.url, 
                life_span:dog.life_span,
                temperaments: dog.temperament
            })
            return dogsData;
        });

        res.status(200).json(dogs);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    filterDataDogs
};
