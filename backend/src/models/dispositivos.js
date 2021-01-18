const {Schema, model } = require('mongoose');

const schema = new Schema({
    user_id: "string",
    nombre_dispositivo: "string",
    marca_dispositivo: "string",
    estado: "string",
    mostrar_publico: "boolean"
});

const dispositivo = model('dispositivos',schema);
module.exports = dispositivo;
