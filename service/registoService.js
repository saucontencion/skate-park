const Skater = require("../models/skater");

async function registro (nombre,email,password,anos_experiencia, especialidad,estado,foto){
 const skater = await Skater.create({nombre,email,password,anos_experiencia, especialidad,estado,foto})

}
module.exports = {registro}