const {Logger} = require('./logger')
const logger = new Logger()

//Register an event
logger.on("messageLogged", (args) => console.log(args))

logger.log('This is')