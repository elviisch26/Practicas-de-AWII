const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares');
const { 
    getInscripcion,
    getInscripciones,
    createInscripciones,
    updateInscripcion,
    deleteIsncripcion
} = require('../controllers').Inscripcion;



const router = Router();


router.get('/', getInscripcion);

router.get('/:id', [
    check('id', 'Este no es un ID de Mongo correcto').isMongoId()
], getInscripciones);

router.post('/', [
    check('fecha', 'El curso es requerido').not().isEmpty(),
    validateFields
], createInscripciones)

router.put('/:id', updateInscripcion)

router.delete('/:id', [
    check('id', 'Debe ser un id de mongo VALIDO').isMongoId()
], deleteIsncripcion)

module.exports = router;