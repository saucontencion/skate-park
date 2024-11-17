function errorHandler(error) {
    if (error.message) {
        console.log(error.message);
        return {
            msg:`hubo un error estandar de: ${error.message}`,
            status:500,
            data:[] 
        }
        if (error) {
            return {
                msg:`hubo un error atipico de: ${error}`,
                status:500,
                data:[]
            }
        } else {
            console.log('El objeto error no existe');  
            return {
                msg:'El objeto error no existe',
                status:500,
                data:[]
            }
        }
    } else {
        console.log('El error no tiene la propiedad "message"');  
        return {
            msg:'El error no tiene la propiedad "message"',
            status:500,
            data:[] 
        }
    }
}
module.exports = {errorHandler}
/* como yo queria hacerlo, pero es poco entendible 
function error(error) {
    error ? (error.message ? console.log(error.message) : console.log('El error no tiene la propiedad "message"')) : console.log('El objeto error no existe');
}
 */