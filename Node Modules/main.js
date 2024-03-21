// HTTP module
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello World")
        res.end()
    }

    if(req.url === '/about'){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }

})

// server.on('connection', (socket) => {
//     console.log("New Connection")
// }) // not a real scenario

server.listen(5000)

console.log("Listening on port 5000....")