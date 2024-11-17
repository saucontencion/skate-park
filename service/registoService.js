const Skater = require("../models/skater");

async function registro (nombre,email,password,anos_experiencia, especialidad,estado,foto){
 const skater = await Skater.create({nombre,email,password,anos_experiencia, especialidad,estado,foto})

}

async function findAll() {
    const todes = await Skater.findAll()
    const todesmap = todes.map(usuario => usuario.toJSON());
    const todeslength = todes.length
    return [todesmap, todeslength]
    console.trace()
}

findAll()
module.exports = {registro, findAll}