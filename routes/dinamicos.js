const { Router } = require('express');

const router = Router();

router.get('', (req,res)=>{
    res.render('Registro')
})

module.exports = router;