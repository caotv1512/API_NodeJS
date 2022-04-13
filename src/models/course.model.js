const Courses = function (course) {
    this.id = course.id;
    this.name = course.name;
    this.cost = course.cost;
    this.description = course.description;
    this.teacher = course.teacher;
}

Courses.getAllCourse = function (result) {
    const data = [{
        "id": "001",
        "name": "JS Basic",
        "cost": 35000,
        "teacher": 'DatTT'
    },
    {
        "id": "002",
        "name": "JS NodeJS",
        "cost": 35000,
        "teacher": 'CaoTV'
    },
    {
        "id": "003",
        "name": "JS React",
        "cost": 35000,
        "teacher": 'Chuoncn'
    },]
    result(data)
}

Courses.getById = function (id) {
    const data = {
        "id": id,
        "name": "JS Basic",
        "cost": 35000,
        "Description": "Codein thực chiến đi làm nhanh!!!",
        "teacher": 'CaoTV',
    }
    return data
}

Courses.create = function (data, result) {
    result (data);
}

Courses.update = function (data, result) {
    result (data);
}
    
Courses.remove = function (id, result) {
result(`Delete course id= ${id} successfully`)
}
module.exports = Courses;