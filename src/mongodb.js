const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/techySoftware")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect");
})



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



const collection = new mongoose.model("FeedbackForm",feedbackSchema)


const ContactUs = mongoose.model("ContactUsForm", contactUsSchema)

module.exports = { collection, ContactUs }



