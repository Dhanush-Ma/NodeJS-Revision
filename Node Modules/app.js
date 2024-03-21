let logger = require('./logger')
async function nonBlocking(){
    console.log("Before Timeout")

    setTimeout(() => console.log("After 5 sec"), 5000)

    console.log("After Timeout 1")

    setTimeout(() => console.log("After 1 sec"), 1000)


    console.log("After Timeout 2")

}

nonBlocking()
console.log(logFunc("Hi"))