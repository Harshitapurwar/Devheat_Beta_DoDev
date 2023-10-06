const Team = require('../models/TeamSchema')
const mongoose = require('mongoose')
const User=require('../models/UserSchema')
async function addTeam(user_id ,team1_name ){
   const userid = new mongoose.Types.ObjectId(user_id)
  
    const team = new Team({
        
        teamname:team1_name,
        users:[userid]
      })
    
      const newteam = await team.save()

      const user = await User.findById(user_id)
      console.log(newteam)
      console.log(newteam._id)
      
      user.teams.push(newteam._id)

      const response = await user.save()

      return newteam._id
    
}
async function editTeam(user_id , data){
    
}

async function addusertoteam(user_id){

  // const hackthonOI =  mongoose.Types.ObjectId(hackthon_id)
  // console.log(hackthonOI)
  const userid = await Team.findById(user_id)

  // console.log(hackthon)
  if(!userid){
    return "Not found"
  }


  const userid1 = new mongoose.Types.ObjectId(user_id)
  userid.team.push(userid1)

  // console.log(hackthon)

  await userid.save();

  return "Done"
  // return "Done"

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

  //join team and user
  async function jointeamanduser(team_id,user_id){
    const user1=await User.findById(user_id)
      console.log(user1)
      
     const team1=await Team.findById(team_id)
     console.log(team1)
     const teamid1 = new mongoose.Types.ObjectId(team_id)
     const userid1 =new mongoose.Types.ObjectId(user_id);
     team1.users.push(userid1);
     user1.teams.push(teamid1);
     await user1.save();
     await team1.save();
     return "done!"
    }





module.exports = {addTeam , editTeam, addHackthonToTeam,getallteam,getoneteam,jointeamanduser}