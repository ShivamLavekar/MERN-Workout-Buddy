const WorkoutMod = require('../Models/WorkModel')
const mongoose = require('mongoose')
//GET all workouts
 const getWorkouts = async (req,res)=>{
    workout = await WorkoutMod.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
 }
 
//GET a single workout
const getWorkout = async (req,res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }
    const workout = await WorkoutMod.findById(id)

    if(!workout){
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)
} 

//CREATE a new workout
const createWorkout = async (req,res)=>{
    const {title,load,reps} = req.body

    //Add doc to DB
    try{
        const workout = await WorkoutMod.create({
            title,load,reps
        })
        res.status(200).json(workout)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
    res.json({message:"POST a New Workout"})
}

//DELETE
const deleteWorkout = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({error:'No such workout'})
    }

    const workout = await WorkoutMod.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)
}
//UPDATE
const updateWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({error:'No such workout'})
    }

    const workout = await WorkoutMod.findOneAndUpdate({_id : id},{
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}