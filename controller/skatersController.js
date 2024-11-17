const  {findAll}  = require("../service/registoService")

const skatersController = async (req,res)=>{
    const {todesmap,todeslength} = await findAll()    
    res.render('index',{todesmap})
}
module.exports = {skatersController}