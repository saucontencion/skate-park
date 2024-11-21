const { Json } = require("sequelize/lib/utils");
const { findAll, update } = require("../service/skater");

const getAdminController = async(req,res)=>{
    /* buscar todes */
    const datos = await findAll();
    if(datos.status ==200) {
        const data = datos.data[0].todesmap;        
        return res.render('admin/admin',{data})
    }
    res.json(datos)
};

const updateAdminController = async(req,res)=>{
    const body = req.body;
    for (const [id, estado] of Object.entries(body)) {
        const fieldsToUpdate = {
          estado: estado === "true", // Convertir "true"/"false" a booleano
        };
      
    const updateAdmin =await update(id,fieldsToUpdate)
    console.log(updateAdmin);
    };
    
    res.json({msg:'pudo haber sido mas sencillo, si fuera estructurado'})
}
module.exports = {getAdminController,updateAdminController }