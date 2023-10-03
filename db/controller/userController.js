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

async function loginUser(user_email , user_password){
  const response = await User.findOne({email:user_email , password:user_password})
  // console.log(response._id)
  // return response._id
  // console.log(response)
  if(response==null){
    return null
  }
  else{
    return response._id
  }


  
}
async function getalluser(){
  const responseall=await User.find()
  console.log(responseall)
    if(responseall==null){
      return null;
    }
    else{
      return responseall;
    
    }
}

async function getoneuser(id){
  const response=await User.findById(id)
    console.log(response)
    if(response==null){
      return null;
    }
    else{
      return response;
    
    }
  }



// add hackathon
// update hackathon
// delete hackathon
// list hackthons / hackathon

// add friend
// remove friends
// list friends


module.exports = {addUser , editUser, loginUser,getalluser,getoneuser}