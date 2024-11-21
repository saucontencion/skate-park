const Skater = require("../models/skater");
const errorHandler500  = require("../helpers/errors");

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
      return errorHandler500(error);
    }

}

async function findById(id) {
    try {        
        const skater = await Skater.findOne({ where: { id } }); 
        if (skater === null) {
            return {
                msg: `El skater ${id} no existe `,
                status: 204,
                data: []
            }}
        return {
            msg: `el skater ${id} es: `,
            status:200,
            data: [skater.toJSON()]}    
    } catch (error) {
       return errorHandler500(error)}
}

async function update(id, fieldsToUpdate) {
      try {            
            const skater = await Skater.update(fieldsToUpdate, {
                where: { id }
              });
              return{
                msg:'data actualizada',
                status:200,
                data:skater
              }
        
      } catch (error) {
        errorHandler500(error)
      }
    
    /* ● Luego de iniciar la sesión, los participantes deberán poder modificar sus datos,exceptuando el 
correo electrónico y su foto. Esta vista debe estar protegida con JWT y los datos que se utilicen en la plantilla deben ser extraídos del token */   
/* ● La vista del administrador debe mostrar los participantes registrados y permitir aprobarlos para cambiar su estado.*/
}

async function deleteById (id){
    try {
        const removed = await Skater.destroy({where: {id}})
        return {
            msg: `el skater con id ${id} se elimino correctamente `,
            status: 200,
            data:[`se elimino ${removed} registro`]
        }
    } catch (error) {
        errorHandler500(error)
    }

}
module.exports = {insert, findAll, findById, update, deleteById}