const config = require('config')
//returns a function
const express = require('express')
const morgan = require('morgan')
//rturns a class
const Joi = require('joi')
const coursesF = require('./courses')
//returns an object when the function is called
const app = express()
app.use(express.json()) // Middleware (req.body)

app.use(express.urlencoded({extended: true})) // Middleware key=value

app.use(express.static('public')) 
app.use('/api/courses', coursesF)


if(app.get('env') === 'development'){
    // third party middlewares
    app.use(morgan('tiny'))
}
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
// console.log(`app: ${app.get('env')}`)


console.log("Application Name: " + config.get('name') )
console.log("Mail Server: " + config.get('mail.host') )

const courses = [
    {id: 1, name: 'couse1'},
    {id: 2, name: 'couse2'},
    {id: 3, name: 'couse3'},
]

// has methods - HTTP Methods
// app.get()
// app.post()
// app.put()
// app.delete()


app.get('/', (req,res) => {
    res.send("Hellooooo")
})


// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening to port ${PORT}`)})