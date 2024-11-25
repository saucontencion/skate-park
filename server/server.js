const fs = require('fs/promises');
const express = require('express');
const expressFileUpload = require('express-fileupload');
const hbs = require('hbs');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config()
class Server {
    constructor(){
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }
    
    middlewares() {
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(__dirname.slice(0, -7) + '/views/partials');
        this.app.use(express.static(path.join(__dirname, '../public'))); 
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(expressFileUpload({
            limits: { fileSize: 5000000 },
            abortOnLimit: true,
            responseOnLimit: 'Error, muy grande la foto'
        }));
    }
    routes() {
        this.app.use('/', require('../routes/participantesRoutes'));
        this.app.use('/admin', require('../routes/adminRoutes'));
        this.app.use('/auth', require('../routes/authRoutes'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor levantado');
            
        })
    }
}
module.exports = Server;