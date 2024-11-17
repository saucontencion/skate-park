const  {findAll}  = require("../service/registoService")

const skatersController = (req,res)=>{
    const loQueNececito = findAll()
    res.render('index')
}
module.exports = {skatersController}