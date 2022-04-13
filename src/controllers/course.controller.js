import Courses from '../models/course.model'


exports.getAllCourse = function (req, res, next) {
    Courses.getAllCourse(function (data) {
        res.send({ result: data });
    })

}

exports.getCourseById = function (req, res) {
    const data = Courses.getById(req.params.id)
    res.send({ result: data });
}

exports.addCourse = function (req, res) {
    const data = req.body;
    Courses.create(data, function (course) {
        res.send({ result: course });
    });
}



exports.deleteCourse = function (req, res) {
    const id = req.params.id;
    Courses.remove(id, function (course) {
        res.send({ result: course });
    })
}

exports.updateCourse = function (req, res) {
    const id = req.params.id;
    Courses.update(id, function (course) {
        res.send({ result: course });
    })
}


