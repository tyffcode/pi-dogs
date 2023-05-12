//const { getAllDogs } = require('../handlers/getAllDogs');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');

const { filterDataDogs } = require('../controllers/filterDataDogs');
const { getDogsById } = require('../controllers/getDogsById');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", (req,res) => {
    filterDataDogs(req,res);
});

router.get("/dogs/:id", (req,res) => {
    getDogsById(req,res);
})

router.get('/temperaments', (req,res) => {

})

module.exports = router;
