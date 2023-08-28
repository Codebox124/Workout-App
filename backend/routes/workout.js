const express = require("express");
const { CreateWorkout, GetAllWorkout, GetSingleWorkout, DeleteWorkout, Updateworkout } = require("../controllers/workoutControllers");
const router = express.Router()



router.get("/", GetAllWorkout)


router.get("/:id", GetSingleWorkout)
 
 router.post("/", CreateWorkout )

 router.delete("/:id", DeleteWorkout)

 router.patch("/:id", Updateworkout)

module.exports = router  