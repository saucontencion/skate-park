const { Router } = require('express');
const { getLoginController, postLoginController } = require('../controller/authController');
const router = Router();


router.get('/login', getLoginController);
router.post('/login', postLoginController);
module.exports = router
