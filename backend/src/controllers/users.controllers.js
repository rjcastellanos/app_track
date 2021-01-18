const user = {};
const {connect} = require('mongoose');
const userModel = require('../models/users');

user.getUser = async (req, res) => {
    const r = await userModel.find()
    res.json(r);
    console.log(req.body);
}

user.addUser = async (req, res) => {
    const u = req.body;
    const newUser = new userModel({
        "username": u.username,
        "email":  u.email,
        "password": u.password,
        "name": u.name
    });
    const r = await newUser.save();
    if(r){
        res.json({message: "Usuario registrado exitosamente"});
    }else{            
        res.json({message: "Error"});
    }    
};

user.userLogin = async (req, res) => {
    const {username, password} = req.body;
    const r = await userModel.findOne({ username, password});
    if(r){
        res.json({message: "Usuario encontrado"});
    }
    else{
        res.json({message: "NO hay resultados"});
    }
};

module.exports = user;