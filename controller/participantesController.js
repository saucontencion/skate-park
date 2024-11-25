const { findAll,findById, update, insert, deleteById } = require("../service/skater");
const  {v4}  = require('uuid');
const id = v4();
const path = require('path');

const participantesController = async (req,res)=>{
    const findall = await findAll();
    const {todesmap,todeslength} =findall.data[0]    
    res.render('participantes/index',{todesmap})
}

const getregistroController = async(req,res)=>{
    const loQueNececito =await findAll()
    res.render('participantes/registro')
}

const postregistroController = async(req,res)=>{
    const fotofile  = req.files.nameFoto;
    fotofile.mv(`${path.join(__dirname,`../public/img/imagen_${id}.jpg`)}`, (err) => {  if (err) {console.log(err);res.redirect('/registro.html')}}); const fotoRuta = `img/imagen_${id}.jpg`
    const estado = 'true';// los admin arpueban su estado
    const {nombre,email,password,anos_experiencia, especialidad} = req.body;
    await insert(nombre,email,password,parseInt(anos_experiencia), especialidad,estado, fotoRuta);
    res.redirect('/');
}


const getDatosController = async(req,res)=>{
    req.cookies?console.log(req.cookies):console.log('no hay req.cookies');
    ;
    
    const idp = req.params.id
    /* deberia tomar jwt y el id de algun lado y mostrar la pagina, y tenre botones de actualizar y eliminar*/ 
    const data = await findById(idp);// buscar por algo pasar los datos realmente
    if(data.status == 200) {
        const {id,nombre,email,password,anos_experiencia, especialidad} = data.data[0];
        return res.render('participantes/datos',{id,nombre,email,password,anos_experiencia, especialidad})
    };
    return res.json({data})
};

const updateDatosController = async (req,res) =>{
    //const {nombre,email,password,anos_experiencia, especialidad} = req.body;
    //id fuente datos id
    const {id,...data} =req.body
    await update(id,data);
    res.redirect('datos')
}
const deleteDatosContrller = async(req,res) =>{
    const {id} = req.body;
    const elimiado = await deleteById(id)    
    res.json(elimiado)

}

module.exports = {participantesController,getregistroController,postregistroController,getDatosController,updateDatosController, deleteDatosContrller}