const { request, response } = require("express");
const path = require('path');
const { registro } = require("../service/registoService");

const getregistroController = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/registro.html'))
}
const postregistroController = (req,res)=>{
    const fotofile  = req.files.nameFoto;
    const fotoBase64 = fotofile.data.toString('base64');
    const fotoBase64Limited = fotoBase64.substring(0, 150);

    const fotoDataUrl = `data:${fotofile.mimetype};base64,${fotoBase64Limited}`;

    const estado = 'true';// este nose de donde veria salir deberia ser activo hasta que se de de baja la cuenta
    const {nombre,email,password,anos_experiencia, especialidad} = req.body;
    registro(nombre,email,password,parseInt(anos_experiencia), especialidad,estado, fotoDataUrl);
    
    res.sendFile(path.resolve(__dirname, '../views/registro.html'))
}



module.exports = {getregistroController, postregistroController}