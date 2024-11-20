const { find, update } = require("../service/skater");

const getDatosController = async(req,res)=>{
    /* deberia tomar jwt y el id de algun lado y mostrar la pagina, y tenre botones de actualizar y eliminar*/ 
    const skater = await find(12);// buscar por algo
    res.render('datos',{skater})
};

const updateDatosController = async (req,res) =>{
    //const {nombre,email,password,anos_experiencia, especialidad} = req.body;
    //id nose de donde lo saco
    const body =req.body
    const quepasho= await update(12, body);
    console.log(quepasho)
    res.redirect('datos')

}

module.exports = {getDatosController, updateDatosController}