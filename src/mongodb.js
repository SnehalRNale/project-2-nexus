const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/techySoftware")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect");
})


//creating a schema to store the inputs from user
const feedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    phone:{
        type: Number,
        required : true
    },
    feedback : {
        type: String,
        required : true
    }
})


const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required : true
    },
    message: {
        type: String,
        required: true
    }
})

// Model for the feedback collection

const collection = new mongoose.model("FeedbackForm",feedbackSchema)

// Model for the contact us collection
const ContactUs = mongoose.model("ContactUsForm", contactUsSchema)

module.exports = { collection, ContactUs }



