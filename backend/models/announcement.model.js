const mongoose = require("mongoose");
const announcementSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "please enter name"],
        },
        description:{
            type: String,
            required: [true, "please enter category"],
        },
        courses:{
            type:String,
            required: [true, "please enter module"],
        },

    },
    {
        timestamps: true,
    }
);

const announcement = mongoose.model(
    "Announcement",
    announcementSchema
);
module.exports = announcement;