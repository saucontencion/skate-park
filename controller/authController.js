const { login } = require("../service/auth");


const getLoginController = (req,res)=>{  
    res.render('auth/login')
};

const postLoginController = async(req ,res)=>{
    const {email,password} =req.body;
    const loginRespuesta =await login(email,password)
    return res.status(200).json(loginRespuesta);
    res.redirect('datos') //enviando datos del skater +[] deberia cambiarse a redirect con jwt y enviar solo jwt

}
module.exports = {getLoginController, postLoginController}