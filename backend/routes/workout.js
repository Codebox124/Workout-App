const express = require("express");
const { CreateWorkout, GetAllWorkout } = require("../controllers/workoutControllers");
const router = express.Router()



router.get("/", GetAllWorkout)


router.get("/:id", (req , res)=>{
    res.json({"body" : "Get a single workout"});
  
 })
 
 router.post("/", CreateWorkout )

 router.delete("/:id", (req , res)=>{
    res.json({"body" : "Delete a workout"});
  
 })

 router.patch("/:id", (req , res)=>{
    res.json({"body" : "Update a workout"});
  
 })

module.exports = router  