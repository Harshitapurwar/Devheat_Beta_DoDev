const express = require('express')
const db = require('./db/connection')
const User = require('./db/models/UserSchema.js')

const app = express();

const port = 5001;

// console.log(db.adminCommand({ listDatabases: 1, filter: { size: { $gt: 100000000 } } }))

// const user = new User({
//   id:1,
//   firstName:'Sparsh',
//   lastName :'Jhariya',
//   email:'sparsh3435@gmail.com'
// })


app.listen(port , () =>{console.log('server listening on port 5001')})