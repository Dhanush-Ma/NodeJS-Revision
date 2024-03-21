const mongoose = require('mongoose')

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/playground',  {
    useNewUrlParser: true,
  },)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Could not connect", err))


const courseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        author: String,
        tags: [ String ],
        isPublished: Boolean,
        date: { type: Date, default: Date.now },
        price : {
            type: Number,
            required: function() { return this.isPublished }
        }
    }
)

// class - Model (Compile schema to get Model)
const Course = mongoose.model('Course', courseSchema)

async function createCourse(){

    // object
    const course = new Course(
        {
            name: 'Node JS',
            author: 'Dhanush',
            tags: ['node', 'express'],
            isPublished: true
        } 
    )

    const course2 = new Course(
        {
            name: 'React',
            author: 'Dhanush',
            tags: ['react', 'frontend'],
            isPublished: true
        } 
    )

        const course3 = new Course(
        {
            name: 'ReactJS',
            author: 'Ashwin',
            tags: ['react', 'frontend'],
            isPublished: true
        } 
    )
    // const result = await course.save()
    // const result1 = await course2.save()
    try {
    const result1 = await course3.save()
    console.log(result1)
    }catch(err){
        console.log(err.message)
    }

}

createCourse()

async function getCourse(){

    const courses = await Course
                    .find({author: 'Dhanush'})
                    .sort({ name: -1})
                    .select({ name: 1, author: 1 })

    console.log(courses)

}

// getCourse()

async function updateCourse(id){
    // //Query First Approach
    // const course = await Course.findById(id)    
    //                     .catch(err => console.log("error"))

    // if(!course){
    //     console.log("Not found")
    //     return
    // }

    // course.set({
    //     author: "Another Author"
    // })

    // const res = await course.save()
    // console.log(res)


    // Update First Approach
    // const result = await Course.updateOne({ _id:id }, {
    //     $set: { name: 'NodeJS', author:"Mosh" }
    // })

    
    // To get the updated document
    // const result = await Course.findByIdAndUpdate(id,{
    //     $set: { name: 'NodeJS', author:"Mosh" }
    // }, { new: true })
    // console.log(result)
}

// updateCourse('63c46060f37d37b4ac243341')


async function deleteCourse(id){

    const result = await Course.findByIdAndDelete(id)
    console.log(result)

}

// deleteCourse('63c46060f37d37b4ac243342')