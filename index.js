const exprees = require('express');
const path = require('path');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// app de expres
const app = exprees();

//lectura y parseo del body
app.use( exprees.json() );

//base de datos
dbConnection();

// node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

//path
const publicPath = path.resolve(__dirname, 'public')
app.use( exprees.static( publicPath ));



//mis rutas
app.use('/api/login', require('./routes/auth'));


server.listen(process.env.PORT , ( err )=>{
    if(err) throw new Error(err);
    console.log('servidor corriendo en puerto!: ', process.env.PORT)
})