const { login } = require("../service/auth");


const getLoginController = (req,res)=>{  
    res.render('auth/login')
};

const postLoginController = async(req ,res)=>{
    const {email,password} =req.body;
    const loginRespuesta =await login(email,password)
    res.cookie('token', loginRespuesta.token, {
        httpOnly: true,
        secure: false, // Cambia a `true` en producción si usas HTTPS.
        maxAge: 4 * 60 * 60 * 1000 // 4 horas en milisegundos.
    });
    res.cookie('uid', loginRespuesta.datos[0], {
        httpOnly: true,
        secure: false, // Cambia a `true` en producción si usas HTTPS.
        maxAge: 4 * 60 * 60 * 1000 // 4 horas en milisegundos.
    });
    res.redirect(`/datos/${loginRespuesta.datos[0]}`) //enviando datos del skater +[] deberia cambiarse a redirect con jwt y enviar solo jwt
/*     return res.status(200).json(loginRespuesta); */
}
module.exports = {getLoginController, postLoginController}