const { Router } = require('express');
const { getregistroController , postregistroController } = require('../controller/registroController');
const { getAdminController } = require('../controller/adminController');
const { getLoginController } = require('../controller/loginController');
const { getDatosController, updateDatosController } = require('../controller/datosController');
const { skatersController } = require('../controller/skatersController');

const router = Router();
router.get('/', skatersController)
router.get('/registro', getregistroController );
router.post('/registro', postregistroController );



router.get('/datos', getDatosController);
router.post('/datos', updateDatosController);

router.get('/login', getLoginController);
router.post('/login', postregistroController);

module.exports = router;