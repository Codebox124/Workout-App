const express = require("express");

const router = require("./routes/workout");
const app = express();
require('dotenv').config()

const workoutRouter = require('./routes/workout')
//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use(workoutRouter)

//routes
app.use('/api/workout', workoutRouter)

app.listen(4000, ()=>{
    console.log('Listenning on port',)
})
