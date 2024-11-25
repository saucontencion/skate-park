
const validarRol =(...rolespermitidos) =>{
    return (req, res, next) => {
        const cuentaAutenticado = req.cuenta;
        if(!cuentaAutenticado.estado){
            return res.status(401).json({msg: 'Estas de baja'});
        }
        if(!rolespermitidos.includes(req.rol)){
            return res.status(401).json({msg: 'Error, no eres administrador'});
        }
        next();
    }
} 

module.exports = {
    validarRol
}