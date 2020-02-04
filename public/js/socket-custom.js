var socket = io();
//Escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión al servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje); // Info recibida por el servidor
})

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Facundo',
    mensaje: 'Hoal Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
})