import Courses from '../models/course.schema';
const db = require('../configs/connectDB');

const getAllCourse = (Courses.getAllCourse = function (result) {
  db.query('SELECT * FROM courses', function (err, course) {
    if (err) {
      result(err);
    } else {
      result(course);
    }
  });
});
const getCourseById = (Courses.getById = function (id, result) {
  db.query(`SELECT * FROM courses WHERE id=?`, id, function (err, course) {
    if (err || course.length === 0) {
      result(err);
    } else {
      result(course[0]);
    }
  });
});

const addNewCourse = (Courses.create = function (data, result) {
  db.query('INSERT INTO courses SET ?', data, function (err, course) {
    if (err) {
      result(err);
    } else {
      result({ id: course.insertId, ...data });
    }
  });
});

const updateCourse = (Courses.update = function (data, result) {
  db.query(
    'UPDATE courses SET course_name=?,cost=?,description=?,teacher=? WHERE id=?',
    [data.course_name, data.cost, data.description, data.teacher, data.id],
    function (err, course) {
      if (err) {
        result(err);
      } else {
        result(data);
      }
    }
  );
});

const deleteCourse = (Courses.remove = function (id, result) {
  db.query('DELETE FROM courses WHERE id = ?', id, function (err, course) {
    if (err) {
      result(err);
    } else {
      result(`Delete course with id = ${id} successfully!!!`);
    }
  });
});
module.exports = {
  getAllCourse,
  getCourseById,
  addNewCourse,
  updateCourse,
  deleteCourse
};
