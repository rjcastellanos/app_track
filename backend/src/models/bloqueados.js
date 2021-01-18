const {Schema, model} = require('mongoose');

const schema = new Schema({
   user_id: "string",
   blocked_user_id: "string" 
});

const bloqueados = model('bloqueados', schema);
module.exports = bloqueados;