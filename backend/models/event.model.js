const mongoose = require("mongoose");
const eventSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "please enter title"],
        },
        dateAndTime:{
          type: Date,
          required: [true, "please enter date"],
        },
        duration:{
            type:Number,
            required: [true, "please enter duration"],
        },
        venue:{
            type: String,
            required: [true, "please enter venue"],
        },
        description:{
            type: String,
            required: [true, "please enter description"],
        },
        guest:{
            type: String,
            required: [true, "please enter guest"],
        },
        course:{
            type: String,
            required: [true, "please enter course"],
        },
        status:{
            type: String,
            required:[true, "please enter status"],
        },
        image:{
            type: String,
            required: [false, "please enter image"],
        },
    },
    {
        timestamps: true,
    }
);

const event = mongoose.model(
    "Event",
    eventSchema
);
module.exports = event;