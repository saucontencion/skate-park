const {request,response} = require('express')
const path = require('path');
const { find } = require('../service/registoService');

const getLoginController = (req,res)=>{  
    res.render('login')
};

const postLoginController = (req=request ,res=response)=>{
    const {email,password} =req.body;
    const skater = find(email, password);
    res.redirect('datos') //enviando datos del skater +[] deberia cambiarse a redirect con jwt y enviar solo jwt

}
module.exports = {getLoginController, postLoginController}