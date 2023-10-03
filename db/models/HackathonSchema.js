const mongoose = require('mongoose');

const Schema = mongoose.Schema

const hackathonSchema = new Schema({
    id:Number,
    pcount:Number,
    Deadline:String,
    Description:String,
    participant_teams:[{type:mongoose.Schema.Types.ObjectId , ref:'Team'}]
})


const hackathon = mongoose.model('hackathon' , hackathonSchema);

module.exports = hackathon;

