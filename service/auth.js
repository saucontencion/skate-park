const errorHandler500 = require("../helpers/errors")
const Skater = require("../models/skater")

const login = async(email,password)=>{
    try {
        let usuario = await Skater.findOne({where:{email}})
        if (!usuario) {
            throw new Error(`usuario con email:${email} no existe`)        
        }
        /* puedo agregar ,validar estado, validar clave, generar jwt  */
        usuario = usuario.toJSON()
        if (usuario.password == password) {
           return ` usario logeado correctamente` 
        }
        
    } catch (error) {
        return errorHandler500(error)
    }

}

module.exports = {login}