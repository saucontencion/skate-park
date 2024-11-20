const { Router } = require('express');

const { participantesController, getregistroController, postregistroController, getDatosController, updateDatosController } = require('../controller/participantesController');


const router = Router();
router.get('/', participantesController)

router.get('/registro', getregistroController );
router.post('/registro', postregistroController );

router.get('/datos', getDatosController);
router.post('/datos', updateDatosController);



module.exports = router;