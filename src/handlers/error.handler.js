module.exports = (error, request, response, next) => {
    if (response.headersSent) {
        return next(error);
    }

    const errorObject = {
        path: request.path,
        method: request.method,
        message: error.message,
        pathMessage: `encountered an error trying to ${ request.method } ${ request.path }`,
        requestBody: null,
        error: (process.env.NODE_ENV === 'dev') ? error : {},
    };

    let status = 500;

    if ((request.method === 'POST' || request.method === 'PUT') && request.body) {
        errorObject.message += ' with request body';
        errorObject.requestBody = request.body;
    }

    if (error.name === 'SequelizeValidationError') {
        status = 400;
    }

    if (error.status === 404) {
        status = 404;
    }

    if (error.message.match(/^Unauthorized/)) {
        errorObject.message = 'Unauthorized';
        status = 401;
    }

    if (error.message.match(/^Database/)) {
        errorObject.message = error.message;
        status = 500;
    }

    return response.status(status).json(errorObject);
};
