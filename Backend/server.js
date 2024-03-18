require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const workoutsRoutes = require('./routes/workouts')

//Express app
const app = express()

//Middle-ware
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
console.log(req.path , req.method)
next()
})

//Route
// app.get('/',(req,res)=>{
//     res.json({message:"welcome to the app"})
// })

app.use('/api/workouts',workoutsRoutes)


//Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //Listen to PORT
app.listen(process.env.PORT,()=>{
    console.log("Connected to DB & Running on port",process.env.PORT)
})})
.catch((err)=>{
    console.log(err)
})
