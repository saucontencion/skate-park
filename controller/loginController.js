const {request,response} = require('express')
const path = require('path');
const { findById } = require('../service/skater');

const getLoginController = (req,res)=>{  
    res.render('login')
};

const postLoginController = (req=request ,res=response)=>{
    const {email,password} =req.body;
    const respuesta ='' //await login(email,password);// compruebo existencia con el service de login
    res.json(respuesta).status(200)
    res.redirect('datos') //enviando datos del skater +[] deberia cambiarse a redirect con jwt y enviar solo jwt

}
module.exports = {getLoginController, postLoginController}