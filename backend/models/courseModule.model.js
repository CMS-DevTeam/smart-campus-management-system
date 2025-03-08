const mongoose = require("mongoose");
const courseModuleSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please enter name"],
        },
        code:{
            type: String,
            required: [true, "please enter code"],
        },
        duration:{
            type:String,
            required: [true, "please enter duration"],
        },
        credit:{
            type: String,
            required: [true, "please enter credit"],
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

const courseModule = mongoose.model(
    "CourseModule",
    courseModuleSchema
);
module.exports = courseModule;