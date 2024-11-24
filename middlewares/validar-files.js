const validatorFiles = (req,res,next)=>{req.files?next():res.status(400).json('req.files no existe')}
module.exports = validatorFiles
