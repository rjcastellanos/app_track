const { Schema, model } = require("mongoose");

const schema = new Schema({
    id_usuario: "string",
    coordenada_x: "string",
    coordenada_y: "string",
    fechaHora: "date"
});

const historialmodel = model('historial_ubicaciones', schema);

module.exports = historialmodel;