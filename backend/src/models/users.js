const {Schema, model} = require('mongoose')

const schema = new Schema({
    username: "string",
    name: "string",
    email: "string",
    phone: "string",
    password: "string",
    actual_location_x: "string",
    actual_location_y: "string"    
});

const user = model('user_prueba', schema);

module.exports = user;