const { Router } = require('express');
const {check} = require('express-validator')
const { participantesController, getregistroController, postregistroController, getDatosController, updateDatosController, deleteDatosContrller } = require('../controller/participantesController');
const { validatorCampos } = require('../middlewares/validar-campos');
const { validarRolExiste } = require('../helpers/validator-bd');
const validatorFiles = require('../middlewares/validar-files');


const router = Router();
router.get('/', participantesController)

router.get('/registro', getregistroController );
router.post('/registro', [check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email no es válido').isEmail(),
    check('password', 'La password es obligatoria').not().isEmpty(),
    check('password', 'La password debe tener mas de 5 caracteres y menos de 10').isLength({ min: 5, max: 15 }),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    check('rol').custom( validarRolExiste ),
    validatorCampos], 
    validatorFiles,
    postregistroController );

router.get('/datos/:id', getDatosController);
router.post('/update-data', updateDatosController);
router.post('/delete-account', deleteDatosContrller);



module.exports = router;