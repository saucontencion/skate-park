const { request, response } = require("express");
const path = require('path');

const getregistroController = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/registro.html'))
}
const postregistroController = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/registro.html'))
}



module.exports = {getregistroController, postregistroController}