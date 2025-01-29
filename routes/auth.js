/* 
    path = 7api/login
*/

const {Router, response}=  require('express');
const { crearUsuario } = require('../controllers/authController');

const router = Router();


router.post('/new', crearUsuario);








module.exports = router;