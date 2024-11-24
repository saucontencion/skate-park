const Rol = require("../models/rol");

const validarRolExiste = async (rolp) => {
    const rol = await Rol.findOne({
        where: {
            role: rolp
        }
    });
    if(!rol){
        throw new Error(`El rol ${rolp} no existe`);
    }
}

const existeNombreUsuario = () => {

}

module.exports = {
    validarRolExiste,
    existeNombreUsuario
};