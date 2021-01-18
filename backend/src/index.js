const express = require('express');
const cors = require('cors');
const app = express();
require('./db');
//ajustes
app.set("port",5000);
//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use('/', require('./routes/userRoutes'));
app.use('/userlogin', require('./routes/userRoutes'));
// app.get('/', function(req, res){
//     res.send('server working');
// })
// app.get('/maps', function(req, res){
//     res.send("Ruta de mapas");
// })

//Arranque de servidor
app.listen(app.get('port'));
console.log("Server Listening on port: ",app.get('port'));