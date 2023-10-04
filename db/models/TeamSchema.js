const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TeamSchema = new Schema({
    teamname:String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
   
    hackathons:[{type:mongoose.Schema.Types.ObjectId , ref:'hackathon'}]
})

const teams = mongoose.model('teams' , TeamSchema)

module.exports = teams;