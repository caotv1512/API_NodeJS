class AppError extends Error {
    constructor(message, statusCode, status) {
        super(message);

        this.statusCode = statusCode;
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}

const handleError = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

const handleErrorsGlobal = async (error, req, res, next) => {
    const { statusCode = 500, status = "error", message } = error;
    return res.status(statusCode).send({
        status,
        message,
    });

};

module.exports = {
    AppError,
    handleError,
    handleErrorsGlobal,
};
