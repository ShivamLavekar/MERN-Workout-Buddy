import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

export default function WorkoutForm() {
  const {dispatch}=useWorkoutContext()
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("NEW WORKOUT ADDED",json);
      dispatch({type:'CREATE_WORKOUTS',payload:json})
    }
  };
  return (
    <div>
      <form action="" className="Form" onSubmit={handleOnSubmit}>
        <h3>Add a New WorkOut</h3>

        <label htmlFor="">Exercise Title : </label><br />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="title"
        />
        <br />
        <br />
        <label htmlFor="">Load (in KG):</label><br />
        <input
          type="number"
          placeholder="Load"
          value={load}
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          name="load"
        />
        <br />
        <br />
        <label htmlFor="">Reps:</label><br />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => {
            setReps(e.target.value);
          }}
          name="reps"
        />
        <br />
        <br />
        <button className="btn btn-primary">Submit</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
