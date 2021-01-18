const {Schema, model} = require('mongoose');

const schema = new Schema({
    user_id: "string",
    contact_id: "string",
});

const contactos = model('contactos', schema);
module.exports = contactos;