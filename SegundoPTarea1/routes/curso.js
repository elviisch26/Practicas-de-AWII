const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares');
const { 
    getCursos,
    getCurso,
    createCursos,
    updateCursos,
    deleteCursos
} = require('../controllers').Curso;



const router = Router();


router.get('/', getCurso);

router.get('/:id', [
    check('id', 'Este no es un ID de Mongo correcto').isMongoId()
], getCursos);

router.post('/', [
    check('descripcion', 'El curso es requerido').not().isEmpty(),
    validateFields
], createCursos)

router.put('/:id', updateCursos)

router.delete('/:id', [
    check('id', 'Debe ser un id de mongo VALIDO').isMongoId()
], deleteCursos)

module.exports = router;