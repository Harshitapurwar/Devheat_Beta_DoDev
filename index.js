const express = require('express')
const db = require('./db/connection')
const User = require('./db/models/UserSchema.js')

const app = express();

const port = 5001;

app.use(express.json());

const userRouter = require('./routes/userRoutes')
const hackathonRouter = require('./routes/hackathonRoutes')
const teamsRouter = require('./routes/teamsRoutes')

app.use('/user' , userRouter)
app.use('/hackathon', hackathonRouter)
app.use('/team',teamsRouter)



app.listen(port , () =>{console.log('server listening on port 5001')})