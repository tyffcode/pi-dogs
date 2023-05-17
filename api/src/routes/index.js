//const { getAllDogs } = require('../handlers/getAllDogs');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');

const { filterDataDogs } = require('../controllers/filterDataDogs');
const { getDogsById } = require('../controllers/getDogsById');
const { getTemperamentData } = require('../controllers/getTemperamentData');
const { createNewDog } = require('../controllers/createNewDog');
const { searchByNameDog } = require('../controllers/searchByNameDog');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", (req,res) => {
    filterDataDogs(req,res);
});

router.get("/dogs/:id", (req,res) => {
    getDogsById(req,res);
});

router.get('/temperaments', (req,res) => {
    getTemperamentData(req,res);
});

router.get('/dogs', (req,res) => {
    searchByNameDog(req,res);
})

router.post('/dogs', (req,res) => {
    createNewDog(req,res);
});
module.exports = router;
