/* 
    path = /api/login
*/

const {Router, response}=  require('express');
const { check } = require('express-validator');
const { crearUsuario , loginUsuario, renewToken} = require('../controllers/authController');
const { validarCampos } = require('../middleware/validar-campos');
const { validarJWT } = require('../middleware/validar-jwt');

const router = Router();


router.post('/new', [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email no es valido").isEmail(),
    check("password", "El contraseña es obligatoria").not().isEmpty(),
    validarCampos
],crearUsuario);

//validar post: /
//validar email y contraseña

router.post('/', [
    check("email", "El email es obligatorio").not().isEmpty(),
    check("password", "Password vacio").not().isEmpty(),
    validarCampos
    ],loginUsuario);


    router.get('/renew', validarJWT ,renewToken);


module.exports = router;