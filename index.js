const express = require('express')
const db = require('./db/connection')

const app = express();

const port = 5000

// console.log(db.adminCommand({ listDatabases: 1, filter: { size: { $gt: 100000000 } } }))

app.listen(port , () =>{console.log('server listening on port 5000')})