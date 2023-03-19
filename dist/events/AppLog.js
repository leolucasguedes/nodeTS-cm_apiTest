import chalk from 'chalk';
var types = {
    Middleware: 'magenta',
    Controller: 'green',
    Repository: 'blue',
    Server: 'yellow',
    Service: 'cyan',
    Error: 'red'
};
var AppLog = function (type, text) {
    console.log(chalk.bold[types[type]]("[".concat(type, "] ").concat(text)));
};
export default AppLog;
