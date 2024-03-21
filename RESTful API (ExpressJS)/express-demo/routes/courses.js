const express = require('express')
const router = express.Router()


router.get('/api/courses', (req,res) => {
    res.send(courses)
})

router.get('/api/courses/:id', (req,res) => {
    const courseObj = courses.find(course => course.id === parseInt(req.params.id))
    
    if(!courseObj){
        res.status(404).send("Not found")
    }else{
        res.send(courseObj)
    }
})


router.post('/api/courses', (req,res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    const result = schema.validate(req.body)
    
    if(result.error){
        res.status(400).send(result.error.details[0].message)
    }
    const course = {
        id: courses.length+1,
        name: req.body.name 
    }
    courses.push(course)
    res.send(course)
})


router.put('/api/courses/:id', (req,res) => {
    // If course not found return 404
    const courseObj = courses.find(course => course.id === parseInt(req.params.id))
    
    if(!courseObj){
        res.status(404).send("Course Not found")
    }

    // if validation fails return 400
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    const result = schema.validate(req.body)
    
    if(result.error){
        res.status(400).send(result.error.details[0].message)
    }

    //update course
    courseObj.name = req.body.name
    res.send(courseObj)
})


router.delete('/api/courses/:id', (req,res) => {
    // If course not found return 404
    const courseObj = courses.find(course => course.id === parseInt(req.params.id))
    
    if(!courseObj){
        return res.status(404).send("Course Not found")
    }

    const index = courses.indexOf(courseObj)

    courses.splice(index, 1)
    res.send(courses)
})

module.exports = router;