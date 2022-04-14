import Courses from '../models/course.model';

exports.getHome = function (req, res) {
  res.send('Wellcome to API');
};

exports.getAllCourse = function (req, res, next) {
  Courses.getAllCourse(function (data) {
    res.send({ result: data });
  });
};

exports.getCourseById = function (req, res) {
  Courses.getById(req.params.id, function (data) {
    res.send( data );
  });
};

exports.addCourse = function (req, res) {
  const data = req.body;
  Courses.create(data, function (course) {
    res.send({ result: course });
  });
};

exports.deleteCourse = function (req, res) {
  const id = req.params.id;
  Courses.remove(id, function (course) {
    res.send({ result: course });
  });
};

exports.updateCourse = function (req, res) {
  const id = req.params.id;
  Courses.update(id, function (course) {
    res.send({ result: course });
  });
};
