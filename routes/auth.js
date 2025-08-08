/* 
    path = /api/login
*/

const {Router, response}=  require('express');
const { crearUsuario } = require('../controllers/authController');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();


router.post('/new', [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email no es valido").isEmail(),
    check("password", "El contraseña es obligatoria").not().isEmpty(),
    validarCampos
],crearUsuario);



module.exports = router;