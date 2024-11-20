const { Router } = require('express');
const router = Router();

router.get('/', async(req,res)=>{
    res.render('base',{ body: require('../views/participantes/List.hbs')})}) //soy lo maximo o lo minimo 
/* router.get('/participantes', (req, res) => {
    res.render('base', {
      body: res.render('participantes/list', { participantes })  // Renderiza list.hbs y pasa su contenido a body
    });
  }); */
module.exports = router
