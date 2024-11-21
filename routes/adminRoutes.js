const { Router } = require('express');
const { getAdminController, updateAdminController } = require('../controller/adminController');
const router = Router();

router.get('/', getAdminController) 
router.post('/update', updateAdminController) 

module.exports = router
