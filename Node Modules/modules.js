const path = require('path')
const os = require('os')
const fs = require('fs')
const EventEmitter = require('events')
const emitter = new EventEmitter()

// let pathObj = path.parse(__filename)

// console.log(os.totalmem());
// console.log(os.freemem());

// //Asynchronous
// fs.readdir('$/', (err,files) => {
//     if(err) console.log('Error', err)
//     else console.log(files)
// })

//Synchronus
// const files = fs.readdirSync('./')
// console.log(files)

//Most Event methods
// -emit (Making a noise, produce something)


// // Register an event
// emitter.on("messageLogged", () => {
//     console.log("Event Emitter")
// })

// // Raise an event
// emitter.emit('messageLogged')


// Register an event
emitter.on("logged", (args) => {
    console.log("Listened", args)
})

// Raise an event 
emitter.emit("logged", {data: "Published"})
