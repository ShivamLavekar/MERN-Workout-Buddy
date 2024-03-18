import React, { useEffect, useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

// Components
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";

export default function Home() {
  // const [workouts, setWorkouts] = useState(null);
   
  //   useEffect(() => {
  //     fetch('/api/workouts/').then((res)=>{return res.json()}).then((data)=>{
  //       console.log(data)
  //       setWorkouts(data)
  //     })
  // },[])

  const {workouts,dispatch} = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response.json();

      if (response.ok) {
        dispatch({type:'SET_WORKOUTS',payload:json})
        // setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  console.log(workouts);
  return (
    <section className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="workouts">
            {workouts &&
              workouts.map((workout) => {
                return <WorkoutDetails key={workout._id} workout={workout} />;
              })}
          </div>
        </div>
        <div className="col-sm-4"><WorkoutForm/></div>
      </div>
    </section>
  );
}
