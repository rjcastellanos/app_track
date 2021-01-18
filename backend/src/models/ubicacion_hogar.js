const {Schema, model} = require('mongoose');

const schema = new Schema({
    user_id: "string",
    coordenada_x: "string",
    coordenada_y: "string",
    coordenada_z: "string",
    currently: "boolean"
});

const ubicacion_hogar = model('ubicacion_hogar', schema);
module.exports = ubicacion_hogar;

