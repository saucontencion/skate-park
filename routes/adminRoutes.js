const { Router } = require('express');
const { getAdminController } = require('../controller/adminController');
const router = Router();

router.get('/', getAdminController) 

module.exports = router
