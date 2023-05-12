// const { getAllDogsApi } = require("../controllers/getAllDogsApi");

// const getDogsHandler = async (req, res) => {
//     try {
//         const { name } = req.body;
//         const dogs = await getAllDogsApi(name);
//         res.status(201).json(dogs);
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }

module.exports = getDogsHandler;