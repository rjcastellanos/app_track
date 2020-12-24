import mongoose from 'mongoose';

const mongoose = mongoose;

const schema = new mongoose.Schema({
    username: "string",
    name: "string",
    email: "string",
    password: "string",
    actual_location: "string"    
});

const user = mongoose.model('User', schema);

module.exports = user;