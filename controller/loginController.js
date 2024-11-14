const getLoginController = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/login.html'))
};
module.exports = {getLoginController}