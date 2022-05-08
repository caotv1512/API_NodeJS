import User from '../models/users.schema';
const db = require('../configs/connectDB');

const getAllUser = (User.getAllUser = function (result) {
    db.query('SELECT * FROM users', function (err, user) {
        if (err) {
            result(err);
        } else {
            result(user);
        }
    });
});
const getUserById = (User.getById = function (id, result) {
    db.query(`SELECT * FROM users WHERE id=?`, id, function (err, user) {
        if (err || user.length === 0) {
            result(err);
        } else {
            result(user[0]);
        }
    });
});
const addNewUser = (User.create = function (data, result) {
    db.query('INSERT INTO users SET ?', data, function (err, user) {
        if (err) {
            result(err);
        } else {
            result({ id: user.insertId, ...data });
        }
    });
});


module.exports = {
    addNewUser,
    getAllUser,
    getUserById,
};
