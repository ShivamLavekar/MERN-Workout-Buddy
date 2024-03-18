const express = require('express')
const router = express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../Controllers/WorkoutController')


//To get all workouts
router.get('/',getWorkouts)

//To get single workouts
router.get('/:id',getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a new workout
router.delete('/:id',deleteWorkout)

//PATCH a new workout
router.patch('/:id',updateWorkout)

module.exports = router