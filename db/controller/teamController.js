const Team = require('../models/TeamSchema')
async function addTeam(user_id ,team1_name ){
    const team = new Team({
        id:user_id,
        teamname:team1_name
      })
    
      team.save().then(result => {
        console.log('Document saved successfully!');
      });

      return 'Added'
    
}
async function editTeam(user_id , data){
    
}


module.exports = {addTeam , editTeam}