const { response } = require("express")
const { validationResult } = require("express-validator")
const { validarCampos } = require("../middleware/validar-campos")


const crearUsuario = async (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Crear usuario!!!'
    })
}


module.exports = { 
    crearUsuario
 }