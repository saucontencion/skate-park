const fs = require('fs/promises');
const express = require('express');
const expressFileUpload = require('express-fileupload');
const path = require('path');
class Server {
    constructor(){
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }
    
    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.set('views', path.resolve(__dirname,'..','views'))
        this.app.set('view engine', 'html');;
        this.app.use(expressFileUpload({
            limits: { fileSize: 5000000 },
            abortOnLimit: true,
            responseOnLimit: 'Error, muy grande la foto'
        }));
    }
    routes() {
        this.app.use('/d', require('../routes/dinamicos')); 
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor levantado');
            
        })
    }
}
module.exports = Server;