const mongoose = require('mongoose');

const SystemAdministratorSchema = mongoose.Schema(
    {
        firstName : {
            type : String,
            required : [true, "please enter first name"]
        },
        lastName : {
            type : String,
            required : [true, "please enter last name"]
        },
        gender : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : [true, "please enter password"],
        },
        phoneNumber : {
            type : String,
            required : [true, "please enter phone number"],
        },
        email : {
            type : String,
            required : [true, "please enter email"],
        },
        dateOfBirth : {
            type : Date,
            required : [true, "please enter date of birth"],
        },
        nic : {
            type : String,
            required : [true, "please enter NIC"],
        },
        address : {
            type : String,
            required : [true, "please enter address"],
        },
        role : {
            type : String,
            required : [true, "please enter role"],
        },
        country : {
            type : String,
            required : [true, "please enter country"],
        },
        image : {
            type : String,
            required : false,
        },
    },
    {
        timestamps : true
    }
);
