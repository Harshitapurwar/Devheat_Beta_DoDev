const User = require('../models/UserSchema')


// add user
// update user
// delete user
// read user -> single
//            -> multiple users

async function addUser (f_name , l_name , user_email,pass_word ){
    const user = new User({
        firstName:f_name,
        lastName :l_name,
        email:user_email,
        password:pass_word
      })
    
      user.save().then(result => {
        console.log('Document saved successfully!');
      });

      return 'Added'
    
}

async function editUser(user_id , data){
        
}


// add hackathon
// update hackathon
// delete hackathon
// list hackthons / hackathon

// add friend
// remove friends
// list friends


module.exports = {addUser , editUser}