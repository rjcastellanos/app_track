const {Schema, model} = require('mongoose')

const schema = new Schema({
    username: "string",
    name: "string",
    email: "string",
    phone: "string",
    password: "string",
    ubicacion: {
        latitud: "string",
        longitud: "string"
    }    
});

const user = model('user_prueba', schema);

module.exports = user;