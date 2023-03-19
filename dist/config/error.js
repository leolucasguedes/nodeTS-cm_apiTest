var AppError = /** @class */ (function () {
    function AppError(log, statusCode, message, detail) {
        if (log === void 0) { log = 'Something went wrong'; }
        if (statusCode === void 0) { statusCode = 400; }
        if (message === void 0) { message = 'Something went wrong'; }
        if (detail === void 0) { detail = 'An unexpected error occurred'; }
        this.log = log;
        this.statusCode = statusCode;
        this.message = message;
        this.detail = detail;
    }
    return AppError;
}());
export default AppError;
