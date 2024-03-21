const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/mongo-exercises',{
    useNewUrlParser: true,
    family: 4
})
    .then(() => console.log("Connected...."))
    .catch((err) => console.log(err)) 

const courseSchema = mongoose.Schema({
    name: String,
    tags: [ String ],
    author: String,
    date: { type: Date, default: Date.now },
    price: Number,
    isPublished: Boolean
})

const Course = mongoose.model("Course", courseSchema)

async function getCoursesEx1(){

    const results = await Course
                .find({ isPublished: true, tags: 'backend' })
                .sort({ name: 1 })
                .select({ name: 1, author:1 })
    console.log(results)
}

async function getCoursesEx2(){

    const results = await Course
                .find({ tags: { $in: ['backend', 'frontend'] } })
                .sort({ price: -1 })
                .select('name author tags price')

    console.log(results)
}


async function getCoursesEx3(){

    const results = await Course
                .find()
                .or([{ price: {$gte: 15} }, { name: /.*by.*/i }])
                
            
    console.log(results)
}


getCoursesEx3()