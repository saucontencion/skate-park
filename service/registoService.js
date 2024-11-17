const Skater = require("../models/skater");
const { errorHandler } = require("./error");

async function insert(nombre,email,password,anos_experiencia, especialidad,estado,foto){
 const skater = await Skater.create({nombre,email,password,anos_experiencia, especialidad,estado,foto})

}

async function findAll() {
    try {
        const todes = await Skater.findAll()
        const todesmap = todes.map(usuario => usuario.toJSON());
        const todeslength = todes.length
        return { msg: 'findAll correcto',
            status: 200,
            data:[{todesmap, todeslength}]}
    } catch (error) {
      errorHandler(error);
    }

}

async function findById(id) {
    /* donde iva el id aca ? en el jwt o cuando inicia sesion se le pasaba? */
    try {
        const skater = await Skater.findOne({ where: { id } });
        if (skater === null) {
            return {
                msg: `El skater con id ${id} no existe `,
                status: 204,
                datos: []
            }
        }
        return {
            msg: `el skater con id ${id} es: `,
            status:200,
            data: [skater.toJSON()]
        }    
    } catch (error) {
        errorHandler(error)
    }
}
findById(6).then(a=>console.log(a));

async function update(id,nombre,email,password,anos_experiencia, especialidad,estado,foto) {
    /* ● Luego de iniciar la sesión, los participantes deberán poder modificar sus datos,exceptuando el 
correo electrónico y su foto. Esta vista debe estar protegida con JWT y los datos que se utilicen en la plantilla deben ser extraídos del token */   
/* ● La vista del administrador debe mostrar los participantes registrados y permitir aprobarlos para cambiar su estado.*/

}
module.exports = {insert, findAll}