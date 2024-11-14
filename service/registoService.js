const Skater = require("../models/skater");

async function registro (nombre,email,password,anos_experiencia, especialidad,foto,estado){
 const skater = await Skater.create({nombre,email,password,anos_experiencia, especialidad,foto,estado})
 
}
module.exports = {registro}