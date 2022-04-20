const Admin = {
    type: "object",
    properties: {
        id: { type: "string" },
        user_name: { type: "string" },
        email: { type: "string" },
        password: { type: "string" }
    },
    require: ["id, user_name, email, password"],
    additionalProperties: false
};

export default Admin;

