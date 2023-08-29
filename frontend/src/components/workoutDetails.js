const WorkoutDetails =({workout})=>{
    return (
        <div className="workout-details">
            <h1>{workout.title}</h1>
            <p><strong>Loads(kg):  </strong>{workout.load} </p>
            <p><strong>Reps(kg):  </strong>{workout.rep} </p>
            <p>{workout.createdAt} </p>
        </div>
    )
}

export default WorkoutDetails