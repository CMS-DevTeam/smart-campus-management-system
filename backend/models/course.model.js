const mongoose = require("mongoose");
const courseSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please enter name"],
        },
        category:{
            type: String,
            required: [true, "please enter category"],
        },
        module:{
            type:String,
            required: [true, "please enter module"],
        },
        price:{
            type: String,
            required: [true, "please enter price"],
        },
        syllabus:{
            type: String,
            required: [true, "please enter syllabus"],
        },
        description:{
            type: String,
            required: [true, "please enter description"],
        },
        status:{
            type: String,
            required: [true, "please enter status"],
        }
    },
    {
        timestamps: true,
    }
);

const course = mongoose.model(
    "Course",
    courseSchema
);
module.exports = course;