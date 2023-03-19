import AppLog from './AppLog.js';
import AppError from '../config/error.js';
function ExceptionHandler(error, _req, res, _next) {
    var log = error.log, statusCode = error.statusCode, message = error.message, detail = error.detail;
    AppLog('Error', log);
    return error instanceof AppError
        ? res.status(statusCode).send({ message: message, detail: detail })
        : res.status(500).send({
            message: "Internal server error",
            detail: error
        });
}
export { AppError };
export default ExceptionHandler;
