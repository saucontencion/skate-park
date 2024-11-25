const { request, response } = require("express");
const jwt = require('jsonwebtoken');
const Admin = require("../models/admin");
const Skater = require('../models/skater');
const { buscarRol } = require("../service/auth");

const validatorToken = async (req = request, res = response, next) => {
    // validar que el token viene
    const {token,uid} = req.cookies;
    if (req.params&& req.params.id !==uid) { res.status(401).json({msg:`no puede acceder a este id, el tuyo es ${uid}`})}

    if (!token) {
        res.status(401).json({ msg: 'No me enviaste el token' });
    }
    // validar el token (que no ha expirado, que no ha sido manipulado)
    try {
        let cuenta;
        let role;
        const { uid,rol } = jwt.verify(token, process.env.SECRETKEY);
        if (rol==1) {
            cuenta = await Admin.findOne({ where: { id: uid } })
            const bRol = await buscarRol(1);
            role= bRol.data[0]
        }else {
            cuenta = await Skater.findOne({where:{id:uid}});
            const bRol = await buscarRol(2);
            role= bRol.data[0]
        };
        req.cuenta = cuenta.toJSON();
        req.rol= role
        console.log(role);
        
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: 'Token no válido' });
    }
}

module.exports = {
    validatorToken
}