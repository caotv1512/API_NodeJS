import Admin from '../models/admin.schema';
const db = require('../configs/connectDB');

const getAllUser = (Admin.getAllUser = function (result) {
    db.query('SELECT * FROM Admin', function (err, user) {
        if (err) {
            result(err);
        } else {
            result(user);
        }
    });
});
const getUserById = (Admin.getById = function (id, result) {
    db.query(`SELECT * FROM admin WHERE id=?`, id, function (err, user) {
        if (err || user.length === 0) {
            result(err);
        } else {
            result(user[0]);
        }
    });
});
const addNewUser = (Admin.create = function (data, result) {
    db.query('INSERT INTO admin SET ?', data, function (err, user) {
        if (err) {
            result(err);
        } else {
            result({ id: user.insertId, ...data });
        }
    });
});

const updateUser = (Admin.update = function (data, result) {
    db.query(
        'UPDATE admin SET user_name=?,email=?,password=? WHERE id=?',
        [data.user_name, data.email, data.password, data.id],
        function (err, user) {
            if (err) {
                result(err);
            } else {
                result(data);
            }
        }
    );
});

const deleteUser = (Admin.remove = function (id, result) {
    db.query('DELETE FROM admin WHERE id = ?', id, function (err, user) {
        if (err) {
            result(err);
        } else {
            result(`Delete user with id = ${id} successfully!!!`);
        }
    });
});

const checkLogin = (Admin.login = function (data, result) {
    db.query('SELECT * FROM admin WHERE email = ? AND password = ?', [data.email, data.password], function (err, user) {
        if (err || user.length === 0) {
            result(err);
        } else {
            result(user[0]); 
        }
    });
});
module.exports = {
    addNewUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    checkLogin
};
