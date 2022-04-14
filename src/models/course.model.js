const db = require('../common/connect');

const Courses = function (course) {
  this.id = course.id;
  this.course_name = course.name;
  this.description = course.description;
  this.cost = course.cost;
  this.coursescol = course.coursescol;
  this.teacher = course.teacher;
};

Courses.getAllCourse = function (result) {
  db.query('SELECT * FROM courses', function (err, course) {
    if (err) {
      result(err);
    } else {
      result(course);
    }
  });
};

Courses.getById = function (id, result) {
  db.query(`SELECT * FROM courses WHERE id=?`, id, function (err, course) {
    if (err || course.length === 0) {
      result(err);
    } else {
      result(course[0]);
    }
  });
};

Courses.create = function (data, result) {
  db.query('INSERT INTO courses SET ?', data, function (err, course) {
    if (err) {
      result(err);
    } else {
      result({ id: course.insertId, ...data });
    }
  });
};

Courses.update = function (data, result) {
  db.query(
    'UPDATE courses SET  course_name=?, description=?, cost=?, coursescol=?, teacher=? WHERE id=?',
    [
      data.course_name,
      data.description,
      data.cost,
      data.coursescol,
      data.teacher,
      data.id
    ],
    function (err, course) {
      if (err) {
        result(err);
        console.log(err);
      } else {
        result(data);
      }
    }
  );
};

Courses.remove = function (id, result) {
  db.query('DELETE FROM courses WHERE id = ?', id, function (err, course) {
    if (err) {
      result(err);
    } else {
      result(`Delete course with id = ${id} successfully!!!`);
    }
  });
};
module.exports = Courses;
