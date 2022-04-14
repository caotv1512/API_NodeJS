const db = require('../common/connect');

const Courses = {
  type: "object",
  properties: {
    id: { type: "string"},
    course_name: { type: "string"},
    cost: { type: "number"},
    description: { type: "string"},
    teacher: { type: "string"}
  },
  require:["id, course_name, cost, description, teacher"],
  additionalProperties: false
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
  console.log(data);
  db.query(
    'UPDATE courses SET course_name=?,cost=?,description=?,tearcher=? WHERE id=?',
    [
      data.course_name,
      data.cost,
      data.description,
      data.tearcher,
      data.id
    ],
    function (err, course) {
      if (err) {
        result(err);
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
