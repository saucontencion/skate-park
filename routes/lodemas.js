const { Router } = require('express');
const { getregistroController,getAdminController, getDatosController, getLoginController } = require('../controller/registroController');
const router = Router();

router.get('/registro', getregistroController );
router.post('/registro', getregistroController );

router.get('/admin', getAdminController );

router.get('/datos', getDatosController);
router.get('/login', getLoginController);

module.exports = router;