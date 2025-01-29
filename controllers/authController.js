const { response } = require("express")


const crearUsuario = async (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Crear usuario!!!'
    })
}


module.exports = { 
    crearUsuario
 }