const { Json } = require("sequelize/lib/utils");
const { findAll } = require("../service/skater");

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
    const body = req.body
    console.log(JSON.stringify(body,null,2));
    
    res.json(body)
}
module.exports = {getAdminController,updateAdminController }