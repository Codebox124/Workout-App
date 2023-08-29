import { useState } from "react"


const WorkoutForm = () => {
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [rep, setReps] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async ()=>{
       
        const workout = {title, load, rep}     

        const response = await fetch("/api/workout", {
            method: 'POST',
            body: JSON.stringify(workout),
           
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        
        if(response.ok){
            setTitle("")
            setLoad("")
            setReps("")
            setError(null)
            console.log("New workout Added!!", json)
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title :</label>

            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} />

            <label>Load :</label>

            <input
                type="text"
                onChange={(e) => setLoad(e.target.value)}
                value={load} />

            <label>Reps :</label>

            <input
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value={rep} />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm 