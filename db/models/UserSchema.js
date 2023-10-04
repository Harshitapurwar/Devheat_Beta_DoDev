const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:String,
    LastName:String,
    email:String,
    password:String,
    github_id:String,
    skills:[String], // web, app , ai , blockchain
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    hackathons:[{type:mongoose.Schema.Types.ObjectId , ref:'Hackathon'}],
    teams:[{type:mongoose.Schema.Types.ObjectId , ref:'Team'}]
})

const User = mongoose.model('User' , userSchema)

module.exports = User;