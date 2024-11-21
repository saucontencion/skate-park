const { Router } = require('express');

const { participantesController, getregistroController, postregistroController, getDatosController, updateDatosController, deleteDatosContrller } = require('../controller/participantesController');


const router = Router();
router.get('/', participantesController)

router.get('/registro', getregistroController );
router.post('/registro', postregistroController );

router.get('/datos/:id', getDatosController);
router.post('/update-data', updateDatosController);
router.post('/delete-account', deleteDatosContrller);



module.exports = router;