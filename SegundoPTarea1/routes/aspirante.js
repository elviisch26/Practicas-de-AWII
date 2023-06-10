const { Router } = require('express')
const { check } =  require('express-validator')
const { validateFields } = require('../middlewares');

const {
    getAspirante,
    getAspirantes,
    createAspirantes,
    updateAspirante,
    deleteAspirante
}= require('../controllers').Aspirante;

const router = Router();

router.get('/',getAspirantes);

router.get('/:id', [
    check('id', 'Este no es un Id de nongo correcto').isMongoId()
] , getAspirante);

router.post('/',[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createAspirantes)

router.put('/:id', updateAspirante)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteAspirante)

module.exports = router;