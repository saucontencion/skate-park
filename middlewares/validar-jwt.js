const { request, response } = require("express");
const jwt = require('jsonwebtoken');
const Admin = require("../models/admin");
const Skater = require('../models/skater')

const validatorToken = async (req = request, res = response, next) => {
    // validar que el token viene
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ msg: 'No me enviaste el token' });
    }
    // validar el token (que no ha expirado, que no ha sido manipulado)
    try {
        const { uid } = jwt.verify(token, process.env.SECRETKEY);
        const cuenta = await Usuario.findOne({ where: { id: uid } })|| await Skater.findOne({where:{id:uid}});
        req.cuenta = cuenta.toJSON();
        req.rol= cuenta.rol
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: 'Token no válido' });
    }
}

module.exports = {
    validatorToken
}