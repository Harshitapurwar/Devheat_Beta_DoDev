const Team = require('../models/TeamSchema')
const mongoose = require('mongoose')
async function addTeam(user_id ,team1_name ){
    const team = new Team({
        id:user_id,
        teamname:team1_name,
        
      })
    
      team.save().then(result => {
        console.log('Document saved successfully!');
      });

      return 'Added'
    
}
async function editTeam(user_id , data){
    
}

async function addHackthonToTeam(hackthon_id , team_id){

  // const hackthonOI =  mongoose.Types.ObjectId(hackthon_id)
  // console.log(hackthonOI)
  const team = await Team.findById(team_id)

  // console.log(hackthon)
  if(!team){
    return "Not found"
  }


  const hackthon1 = new mongoose.Types.ObjectId(hackthon_id)
  team.hackathons.push(hackthon1)

  // console.log(hackthon)

  await team.save();

  return "Done"
  // return "Done"

}
async function getallteam(){
  const responseall=await Team.find()
  console.log('response',responseall)
    if(responseall==null){
      return null;
    }
    else{
      return responseall;
    
    }
}

async function getoneteam(id){
  
  const response=await Team.findById(id)
    console.log('response:' , response)
    if(response==null){
      return null;
    }
    else{
      return response;
    
    }
  }




module.exports = {addTeam , editTeam, addHackthonToTeam,getallteam,getoneteam}