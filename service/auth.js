const errorHandler500 = require("../helpers/errors");
const { generarJWT } = require("../helpers/generar-jwt");
const Admin = require("../models/admin");
const Skater = require("../models/skater");
const bcryptjs = require('bcryptjs');
const Rol = require('../models/rol')

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
            datos: [usuario.id],
            token
        }
    } catch (error) {
        return errorHandler500(error)
    }
};
const buscarRol = async(rolid)=>{
    if (rolid == 1) {
        const rolString = await Admin.findOne({where:{rol:rolid}, include: Rol});
        const roltoJSON= await rolString.toJSON();
        return {
            msg:'buscar el rol con eager load',
            status:200,
            data:[roltoJSON.Rol.role],   
    }}
    if (rolid==2) {
        const rolString = await Skater.findOne({where:{rol:rolid}, include: Rol});
        const roltoJSON= await rolString.toJSON();
        return {
            msg:'buscar el rol con eager load',
            status:200,
            data:[roltoJSON.Rol.role],  
        }
    }
};

module.exports = {login,buscarRol}