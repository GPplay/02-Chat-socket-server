const {io} = require('../index');


//mensajes de sockets
io.on('connection', client => {
    console.log('Conecto');


    client.on('disconnect', () => { 
        console.log('cliente desconectado');
    });

    // client.on('mensaje', ( payload ) => {
    //     console.log('Mensaje!', payload);
    //     io.emit( 'mensaje', {admin: 'Gybram es el admin =D'});
    // })
});