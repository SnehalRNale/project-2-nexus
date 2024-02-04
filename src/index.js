const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const templetePath = path.join(__dirname,'../templates')
// const collection = require("./mongodb")
const { collection, ContactUs } = require("./mongodb")

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templetePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'../templates')))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/feedback",(req,res)=>{
    res.render("feedback")
})


app.get("/contactUS", (req, res) => {
    res.render("home")
})


app.post("/feedback", async(req,res) =>{
    const data = {
                name: req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                feedback : req.body.feedback
            }
        
            await collection.insertMany([data])
        
            res.render("home")
})

app.post("/contactUS", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone : req.body.phone,
        message: req.body.message
    }

    await ContactUs.create(data)

    res.render("home")
})

// app.post("/feedback", async(req,res) =>{
//     res.render("home")
// })

// app.post("/feedback",async (req,res)=>{
//     const data = {
//         name: req.body.name,
//         password : req.body.password
//     }

//     await collection.insertMany([data])

//     res.render("home")
// })

// app.post("/login",async (req,res)=>{
    
//     try{
//         const check = await collection.findOne({name:req.body.name})
        
//         if(check.password===req.body.password){
//             res.render("home")
//         }
//         else{
//             res.send("wrong Password")
//         }
//     }
//     catch{
//         res.send("wrong details")
//     }
    
// })


app.listen(3000,()=>{
    console.log("Port is connected");
})