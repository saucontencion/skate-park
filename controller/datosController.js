const path = require('path');

const {response, request} = require('express');

const getDatosController = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/datos.html'))
};

module.exports = {getDatosController}