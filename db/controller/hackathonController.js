const hackathon = require('../models/HackathonSchema');
const Hackathon = require('../models/HackathonSchema')
const mongoose = require('mongoose')

async function addHackathon(name , participant_count,deadline,description){
    const hackathon = new Hackathon({
        name:name,
        pcount:participant_count,
        Deadline:deadline,
        Description:description,
      })
    
      hackathon.save().then(result => {
        console.log('Document saved successfully!');
      });
    
      return 'Added'
    
}
async function editHackathon(hackathon_id , data){
        
}

async function addTeamToHackthon(hackthon_id , team_id){

  // const hackthonOI =  mongoose.Types.ObjectId(hackthon_id)
  // console.log(hackthonOI)
  const hackthon = await Hackathon.findById(hackthon_id)

  // console.log(hackthon)
  if(!hackthon){
    return "Not found"
  }


  const teamOI = new mongoose.Types.ObjectId(team_id)
  hackthon.participant_teams.push(teamOI)

  // console.log(hackthon)

  await hackthon.save();

  return "Done"
  // return "Done"

}

async function getallhackathon(){
  const responseall=await hackathon.find()
  console.log(responseall)
    if(responseall==null){
      return null;
    }
    else{
      return responseall;
    
    }
}
async function getonehackathon(id){
  
  const response=await hackathon.findById(id)
    console.log('response:' , response)
    if(response==null){
      return null;
    }
    else{
      return response;
    
    }
  }


module.exports = {addHackathon , editHackathon, addTeamToHackthon,getallhackathon,getonehackathon}