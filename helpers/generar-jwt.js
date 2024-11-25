const jwt = require('jsonwebtoken');

const generarJWT = (uid,rol) => {
    return new Promise((resolve, reject) => {
        const payload = { uid,rol };
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT
}