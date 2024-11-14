const { Router } = require('express');
const path = require('path');

const router = Router();
router.get('/registro', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/registro.html'))
})
router.get('/admin', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/admin.html'))
})
router.get('/datos', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/datos.html'))
})
router.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/login.html'))
})

module.exports = router;