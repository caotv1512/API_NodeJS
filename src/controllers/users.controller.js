// import Courses from '../models/course.model';
import UserCommon from '../common/user';

exports.getHome = (req, res) => {
  res.status(200).json({ success: true });
};

exports.getAllUser = (req, res, next) => {
  UserCommon.getAllUser(function (data) {
    res.status(200).send({ success: true, result: data });
  });
};

exports.getUserById = (req, res) => {
  UserCommon.getUserById(req.params.id, function (data) {
    res.status(200).send({ success: true, result: data });
  });
};

exports.addUser = (req, res) => {
  const data = req.body;
  if (!(data.id)) {
    return res.status(400).send({ error: 'Data not formatted properly' });
  }

  UserCommon.addNewUser(data, function (course) {
    res.send({
      success: true,
      message: `Add successfully user with ID:${course.id}`,
    });
  });
};




