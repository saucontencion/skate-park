const  {findAll}  = require("../service/registoService")

const skatersController = async (req,res)=>{
    const findall = await findAll();
    const {todesmap,todeslength} =findall.data[0]    
    res.render('index',{todesmap})
}
module.exports = {skatersController}