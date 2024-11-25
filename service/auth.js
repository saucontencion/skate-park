const errorHandler500 = require("../helpers/errors");
const { generarJWT } = require("../helpers/generar-jwt");
const Admin = require("../models/admin");
const Skater = require("../models/skater");
const bcryptjs = require('bcryptjs');

const login = async(email,password)=>{
    try {
        var usuario = await Skater.findOne({where:{email}}) || await Admin.findOne({where:{email}})
        if (!usuario) {
            throw new Error(`usuario con email:${email} no existe`)        
        }
        /* puedo agregar ,validar estado, validar clave, generar jwt  */
        usuario = usuario.toJSON()
        //validar clave con bycryptjs compareSync
        const validaClave = bcryptjs.compareSync(password, usuario.password);
        if(!validaClave){
            throw new Error('error clave incorrecta')
        }
        //construir el JWT
        const token = await generarJWT(usuario.id, usuario.rol);
        return {
            msg: 'Usuario autenticado',
            datos: [],
            token
        }
    } catch (error) {
        return errorHandler500(error)
    }

}

module.exports = {login}