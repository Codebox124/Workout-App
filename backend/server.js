const express = require("express");

const mongoose = require("mongoose")


const app = express();
require('dotenv').config()

const workoutRouter = require('./routes/workout')
//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next();
})

app.use(workoutRouter)

//routes
app.use('/api/workout', workoutRouter)

mongoose.connect(process.env.MONG_URL)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('Listenning on port', process.env.PORT )
    })
    
}).catch((err)=>{
    console.log(err)
})

process.env
