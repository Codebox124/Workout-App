const express = require("express")
const router = express.Router()

router.get("/", (req , res)=>{
   res.json({"body" : "Get all workout"});
 
})
router.get("/:id", (req , res)=>{
    res.json({"body" : "Get a single workout"});
  
 })

 router.post("/", (req , res)=>{
    res.json({"body" : "Post New workout"});
  
 })

 router.delete("/:id", (req , res)=>{
    res.json({"body" : "Delete a workout"});
  
 })

 router.patch("/:id", (req , res)=>{
    res.json({"body" : "Update a workout"});
  
 })

module.exports = router  