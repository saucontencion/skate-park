const path = require('path');

const getLoginController = (req,res)=>{
    res.render('login')
};
module.exports = {getLoginController}