import { useEffect, useState } from "react"

//component
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from "../components/workoutForm";

const Home = ()=>{
    const [workouts, setWorkouts] = useState()
    useEffect(()=>{
        const fetchWorkout = async()=>{
            const response = await fetch('/api/workout')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkout()
    },[]);
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout = {workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home