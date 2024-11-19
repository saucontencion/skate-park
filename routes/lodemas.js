const { Router } = require('express');
const { getregistroController , postregistroController } = require('../controller/registroController');
const { getAdminController } = require('../controller/adminController');
const { getLoginController } = require('../controller/loginController');
const { getDatosController } = require('../controller/datosController');
const { skatersController } = require('../controller/skatersController');

const router = Router();
router.get('/', skatersController)
router.get('/registro', getregistroController );
router.post('/registro', postregistroController );


router.get('/admin', getAdminController );

router.get('/datos', getDatosController);
router.get('/login', getLoginController);
router.post('/login', postregistroController);

module.exports = router;