import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
export default function WorkoutDetails({workout}) {
  const {dispatch} = useWorkoutContext()
  const handleClick = async ()=>{
    const response = await fetch('/api/workouts/'+ workout._id,{
      method:'DELETE'
    })
    const json = await response.json()

    if (response.ok){
      dispatch({type:'DELETE_WORKOUTS',payload:json})
    }
  }
  return (
    <div className='item'>
        <h4>{workout.title}</h4>
        <p className='m-0'><strong>Load (kg): </strong>{workout.load}</p>
        <p className='m-0'><strong>Reps : </strong>{workout.reps}</p>
        <p className='m-0'><strong>Created: </strong>{workout.createdAt}</p>
        <button className='btn btn-danger' onClick={handleClick}>Delete</button>
    </div>
  )
}
