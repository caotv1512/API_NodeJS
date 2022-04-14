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

export default Courses;

