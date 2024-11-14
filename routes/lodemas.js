const { Router } = require('express');
const path = require('path');

const router = Router();
router.get('/registro', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/registro.html'))
/*     console.log(path.resolve(__dirname, '../views/registro.html'));
 *//*     res.sendFile(path.resolve(__dirname, '../views/registro.html')); */
})

module.exports = router;