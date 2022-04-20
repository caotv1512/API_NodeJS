import jwt from 'jsonwebtoken';
// import _APP from './_APP';
require('dotenv').config();

// Tạo token
const make = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ data: user },process.env.ACCESS_TOKEN, {
            algorithm: 'HS256',
            expiresIn:process.env.TOKEN_TIME_LIFE
        },
            function (err, _token) {
                if (err) {
                    return reject(err)
                }
                return resolve(_token)
            }
        )
    })
}
//Check !token

const check = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token,process.env.ACCESS_TOKEN, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })

    })
}


module.exports = {
    make: make,
    check: check,
}
