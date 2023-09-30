const mongoose = require('mongoose');

const Schema = mongoose.Schema

const hackathonSchema = new Schema({
    _id:Number,
    participant_count:Number,

    participant_teams:[{type:mongoose.Schema.Types.ObjectId , ref:'participant'}]
})

const hackathon = mongoose.model('hackathon' , hackathonSchema);

module.exports = hackathon;

