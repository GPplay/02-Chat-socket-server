const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        console.log('Intentando conectar a:', process.env.DB_CNN);
        await mongoose.connect(process.env.DB_CNN,{
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log('Base de datos online');
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos - hable con gybram');
    }
}

module.exports = {
    dbConnection
}