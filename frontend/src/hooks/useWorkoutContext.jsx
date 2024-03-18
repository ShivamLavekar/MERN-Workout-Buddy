import { WorkoutContext } from "../Context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () =>{
    const context = useContext(WorkoutContext)
    if(!context){
        throw Error('useWorkoutContext used inside an WorkoutContextProvider')
    }
    return context
}