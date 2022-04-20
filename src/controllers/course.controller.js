// import Courses from '../models/course.model';
import CoursesCommon from '../common/common';

exports.getHome = (req, res) => {
  res.status(200).json({ success: true });
};

exports.getAllCourse = (req, res, next) => {
  CoursesCommon.getAllCourse(function (data) {
    res.status(200).send({ success: true, result: data });
  });
};
// exports.getAllCourse = async (req, res, next) => {
//   const {data} = req.params;
//   const result = await CoursesCommon.getAllCourse(data);
//   res.status(200).send({ success: true, result: result });
//   console.log(result);
// };
exports.getCourseById = (req, res) => {
  CoursesCommon.getCourseById(req.params.id, function (data) {
    res.status(200).send(data);
  });
};

exports.addCourse = (req, res) => {
  const data = req.body;
  CoursesCommon.addNewCourse(data, function (course) {
    res.send({ result: course });
  });
};

exports.updateCourse = function (req, res) {
  const data = req.body;
  CoursesCommon.updateCourse(data, function (course) {
    res.send({ result: course });
  });
};

exports.deleteCourse = function (req, res) {
  const id = req.params.id;
  CoursesCommon.deleteCourse(id, function (course) {
    res.send({ result: course });
  });
};
