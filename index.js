const express = require('express')
const db = require('./db/connection')
const User = require('./db/models/UserSchema.js')

const app = express();

const port = 5001;




app.listen(port , () =>{console.log('server listening on port 5001')})