const Workout = require('../models/Workout')
const mongoose = require("mongoose")

//Get all workout

const GetAllWorkout = async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt :-1})

    res.status(200).json(workouts)
}


//Get a single workout
const GetSingleWorkout =async(req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid()){
        res.status(404).json({error:"No such workout "})
    }
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: "No such workout "})
    }
    res.status(200).json(workout)
}

//create a workout

const CreateWorkout = async (req, res)=>{
    const {title,  load ,rep } = req.body
    try{
        const workout = await Workout.create({title,  load ,rep })
        res.status(200).json(workout)
    }catch(error){
        res.status(404).json({error: error.message})
    }
    res.json({"body" : "Post New workout"});
}

//delete a workout
const DeleteWorkout = async (req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid()){
        res.status(404).json({error:"No such workout "})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: "No such workout "})
    }
    res.status(200).json(workout)

}
// update a workout

const Updateworkout = async (req, res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid()){
        res.status(404).json({error:"No such workout "})
    }
    const workout = await Workout.findOneAndReplace({_id: id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: "No such workout "})
    }
    res.status(200).json(workout)
   

}




module.exports = {
    CreateWorkout,
    GetAllWorkout,
    GetSingleWorkout,
    DeleteWorkout,
    Updateworkout
}