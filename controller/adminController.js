const { findAll } = require("../service/skater");

const getAdminController = (req,res)=>{
    /* buscar todes */
    const todes = findAll()
    res.render('admin/admin',{todes})
};
module.exports = {getAdminController}