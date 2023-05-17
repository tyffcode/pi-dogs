const { Dog, Temperaments } = require('../db');

const createNewDog = async (req,res) => {
    const { image, name, height, weight, life_span, temperaments } = req.body;
    try {
        const dog = await Dog.create({ 
            image, 
            name, 
            height, 
            weight, 
            life_span,  
        });
        
        const temperamentsNewDog = temperaments.split(',');
        const createdTemperaments = await Promise.all(
            temperamentsNewDog.map(async (temperament) => {
              const [newTemperament] = await Temperaments.findOrCreate({
                where: { name: temperament }
              });
              return newTemperament;
            })
        );
        
        await dog.addTemperaments(createdTemperaments);
        //await dog.setTemperaments(createdTemperaments);
        const newDog = await Dog.findByPk(dog.id,{
            include: Temperaments
        });
        //const newDog = { ...dog, temperaments: createdTemperaments }

        res.status(200).json(newDog);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createNewDog,
}