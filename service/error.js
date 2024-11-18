function errorHandler(error) {
    if (error) {  // Primero verificamos si el error existe
        if (error.message) {  // Si tiene la propiedad 'message', es un error estándar
            console.error(error.message);
            return {
                msg: `Hubo un error estándar en el servidor: ${error.message}`,
                status: 500,
                data: []
            };
        } else if (error.status == 401) {
            return {
                msg: error,
                status: 401,
                data:[]
            }
        } else  {  // Si no tiene la propiedad 'message', es un error particular (sin 'message')
            console.error(`log Hubo un error particular en el servidor: ${JSON.stringify(error)}`);
            return {
                msg: `Hubo un error particular: ${JSON.stringify(error)}`,
                status: 500,
                data: []
            };
        }
    } else {  // Si el objeto error no existe
        console.error('El objeto error no existe, pero algo fallo ');
        return {
            msg: 'El objeto error no existe, pero algo fallo o no?'+ `esta funcion se esta llamando en: ${console.trace()}`,
            status: 500,
            data: []
        };
    }
};

module.exports = errorHandler
/* como yo queria hacerlo, pero es poco entendible 
function error(error) {
    error ? (error.message ? console.log(error.message) : console.log('El error no tiene la propiedad "message"')) : console.log('El objeto error no existe');
}
 */