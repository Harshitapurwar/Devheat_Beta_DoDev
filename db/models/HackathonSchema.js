const mongoose = require('mongoose');

const Schema = mongoose.Schema

const hackathonSchema = new Schema({
    id:Number,
    pcount:Number,

    participant_teams:[{type:mongoose.Schema.Types.ObjectId , ref:'participant'}]
})


const hackathon = mongoose.model('hackathon' , hackathonSchema);

module.exports = hackathon;

