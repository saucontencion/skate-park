const { Router } = require('express');
const router = Router();

router.get('/', (req,res)=>{ res.render('login')})

module.exports = router
