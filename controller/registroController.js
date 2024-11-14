const { request, response } = require("express");
const path = require('path');
const { registro } = require("../service/registoService");

const getregistroController = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/registro.html'))
}
const postregistroController = (req,res)=>{
    const { nameFoto } = req.files;
    const {Nombre,Email} = req.body;
    registro(Nombre,Email, nameFoto.data);
    
    res.sendFile(path.resolve(__dirname, '../views/registro.html'))
}



module.exports = {getregistroController, postregistroController}