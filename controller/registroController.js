const path = require('path');
const { insert, findAll } = require("../service/registoService");
const  {v4}  = require('uuid');
const id = v4();

const getregistroController = (req,res)=>{
    const loQueNececito = findAll()
    res.render('registro')
}
const postregistroController = async(req,res)=>{
    const fotofile  = req.files.nameFoto;
    /* opcion 1 */ const fotoBase64 = fotofile.data.toString('base64'); const fotoBase64Limited = fotoBase64.substring(0, 150); const fotoDataUrl = `data:${fotofile.mimetype};base64,${fotoBase64Limited}`;
    /* opcion 2 */ fotofile.mv(`${path.join(__dirname,`../public/img/imagen_${id}.jpg`)}`, (err) => {  if (err) {console.log(err);res.redirect('/registro.html')}}); const fotoRuta = `img/imagen_${id}.jpg`
    const estado = 'false';// los admin arpueban su estado
    const {nombre,email,password,anos_experiencia, especialidad} = req.body;
    await insert(nombre,email,password,parseInt(anos_experiencia), especialidad,estado, fotoRuta);
    res.redirect('/');
}



module.exports = {getregistroController, postregistroController}