const historialmodel = require('../models/historial_ubicaciones');
const historialmethods = {};

historialmethods.addLog = async (req, res) => {
    const log = req.body;
    const newLog = new historialmodel({
        id_usuario: log.id_usuario,
        coordena_x: log.coordena_x,
        coordena_y: log.coordena_y,
        fechaHora: new Date
    });
    await newLog.save();
}


