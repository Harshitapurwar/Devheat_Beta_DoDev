const express = require('express')
const db = require('./db/connection')
const User = require('./db/models/UserSchema.js')
const hackathon=require('./db/models/HackathonSchema.js')
const teams=require('./db/models/TeamSchema.js')
const cors = require('cors');
const app = express();

const port = 5000

app.use(express.json());
app.use(cors());
const userRouter = require('./routes/userRoutes')
const hackathonRouter = require('./routes/hackathonRoutes')
const teamsRouter = require('./routes/teamsRoutes')

app.use('/user' , userRouter)
app.use('/hackathon', hackathonRouter)
app.use('/team',teamsRouter)



app.listen(port , () =>{console.log('server listening on port 5001')})


