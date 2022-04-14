import Courses from '../models/course.model';

exports.getHome = (req, res) => {
  res.status(200).json({ success: true })
};

exports.getAllCourse = (req, res, next) => {
  Courses.getAllCourse(function (data) {
    res.status(200).send({ success: true, result: data });
  });
};

exports.getCourseById = (req, res) => {
  Courses.getById(req.params.id, function (data) {
    res.status(200).send(data);
  })
};

exports.addCourse = (req, res) => {
  const data = req.body;
  Courses.create(data, function (course) {
    res.send({ result: course });
  });
};


exports.updateCourse = function (req, res) {
  const data = req.body;
  Courses.update(data, function (course) {
    res.send({ result: course });
  });
};

exports.deleteCourse = function (req, res) {
  const id = req.params.id;
  Courses.remove(id, function (course) {
    res.send({ result: course });
  });
};

