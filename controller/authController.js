const { login } = require("../service/auth");


const getLoginController = (req,res)=>{  
    res.render('auth/login')
};

const postLoginController = async(req ,res)=>{
    const {email,password} =req.body;
    const respuesta =email+' '+password //await login(email,password);// compruebo existencia con el service de login
    const loginRespuesta =await login(email,password)
    return res.json(loginRespuesta).status(200);
    res.redirect('datos') //enviando datos del skater +[] deberia cambiarse a redirect con jwt y enviar solo jwt

}
module.exports = {getLoginController, postLoginController}