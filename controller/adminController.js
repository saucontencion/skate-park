const { request, response } = require("express");

const getAdminController = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/admin.html'))
};
module.exports = {getAdminController}