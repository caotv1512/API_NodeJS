// import Courses from '../models/course.model';
import AdminCommon from '../common/admin';
import JWT from '../common/_JWT'

exports.getHome = (req, res) => {
    res.status(200).json({ success: true });
};

exports.getAllUser = (req, res, next) => {
    AdminCommon.getAllUser(function (data) {
        res.status(200).send({ success: true, result: data });
    });
};

exports.getUserById = (req, res) => {
    AdminCommon.getUserById(req.params.id, function (data) {
        res.status(200).send(data);
    });
};

exports.addUser = (req, res) => {
    const data = req.body;
    AdminCommon.addNewUser(data, function (course) {
        res.send({ result: course });
    });
};

exports.updateUser = function (req, res) {
    const data = req.body;
    AdminCommon.updateUser(data, function (course) {
        res.send({ result: course });
    });
};

exports.deleteUser = function (req, res) {
    const id = req.params.id;
    AdminCommon.deleteUser(id, function (course) {
        res.send({ result: course });
    });
};


exports.login = function (req, res) {
    const data = req.body;
    AdminCommon.checkLogin(data, async function (respnse) {
        if (respnse) {
            const _token = await JWT.make(respnse);
            res.send({ result: _token });
        }

    });
};