const User = require('../models/UserSchema')
async function addUser(user_id , f_name , l_name , user_email,user_skill){
    const user = new User({
        id:user_id,
        firstName:f_name,
        lastName :l_name,
        email:user_email,
        skills:user_skill
      })
    
      user.save().then(result => {
        console.log('Document saved successfully!');
      });
    
}

async function editUser(){

}

module.exports = {addUser , editUser}