const device = {};
const {connect} = require('mongoose');
const dispositivo = require('../models/dispositivos');

device.addDevice = async (req, res) => {
    const dev = req.body;
    const newDevice = new dispositivo({
        "user_id": dev.user_id,
        "nombre_dispositivo": dev.nombre_dispositivo,
        "marca_dispositivo": dev.marca_dispositivo,
        "estado": dev.estado,
        "mostrar_publico": dev.mostrar_publico
    });
    await newDevice.save();          
}

device.findDevice = async(req, res) => {
    const dev = req.body;
    const encontrardo = await dispositivo.findOne({
        "user_id": dev.user_id,
    })
    if(encontrardo){
        res.json(encontrardo);
    }else{
        res.json({mensaje: "Dispositivo no encontrado"});
    }
} 
module.exports = device;