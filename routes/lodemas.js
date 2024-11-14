const { Router } = require('express');
const { getregistroController } = require('../controller/registroController');
const { getAdminController } = require('../controller/adminController');
const { getLoginController } = require('../controller/loginController');
const { getDatosController } = require('../controller/datosController');

const router = Router();
router.get('/registro', getregistroController );
router.post('/registro', getregistroController );


router.get('/admin', getAdminController );

router.get('/datos', getDatosController);
router.get('/login', getLoginController);

module.exports = router;