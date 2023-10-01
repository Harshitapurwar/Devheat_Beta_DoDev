const Hackathon = require('../models/HackathonSchema')
async function addHackathon(user_id ,participant_count,participant_teams ){
    const hackathon = new Hackathon({
        id:user_id,
        pcount:participant_count,
        team: participant_teams,
        Deadline:deadline,
        Description:description,
      })
    
      hackathon.save().then(result => {
        console.log('Document saved successfully!');
      });
    
      return 'Added'
    
}
async function editHackathon(user_id , data){
        
}


module.exports = {addHackathon , editHackathon}