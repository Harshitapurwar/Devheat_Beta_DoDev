const User = require('../models/UserSchema')
const mongoose=require('mongoose')
const Team = require('../models/TeamSchema')

// add user
// update user
// delete user
// read user -> single
//            -> multiple users

async function addUser (f_name , l_name , user_email,pass_word, skills ){
    const user = new User({
        firstName:f_name,
        lastName :l_name,
        email:user_email,
        password:pass_word,
        skills:skills,
        github_id:null
      })
    
      const response = await user.save()
      

      return response._id
      
    
}

async function editUser(user_id , data){
        
}

async function loginUser(user_email , user_password){
  const response = await User.findOne({email:user_email , password:user_password})
  console.log(response._id)
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


  async function addfriends(id1,id2){
    const user1=await User.findById(id1)
      console.log(user1)
      if(id1==null){
        return null;
      }
     const user2=await User.findById(id2)
     console.log("user 2")
     const userid1 = new mongoose.Types.ObjectId(id1)
     const userid2 =new mongoose.Types.ObjectId (id2);
     user2.friends.push(userid1);
     user1.friends.push(userid2);
     await user1.save();
     await user2.save();
     return "done!"
    }

    //// Array to store selected friend user IDs
// const selectedFriends = [];

// // Function to add a friend to the selected list
// function addFriend(userId) {
//     // Check if the user ID is already in the selectedFriends array
//     if (!selectedFriends.includes(userId)) {
//         // If not, add it to the array
//         selectedFriends.push(userId);
//     }

//     // Display the selected friend user IDs
//     updateSelectedFriendsList();
// }

// // Function to update the list of selected friends in the HTML
// function updateSelectedFriendsList() {
//     const selectedFriendsSpan = document.getElementById('selected-friends');
//     selectedFriendsSpan.textContent = selectedFriends.join(', ');
// }




// add hackathon
// update hackathon
// delete hackathon
// list hackthons / hackathon

// add friend
// remove friends
// list friends

async function getUserTeams(id){
  try {
    await User.aggregate([
      {
        $lookup:{
          from:"teams",
          localField:"_id",
          foreignField:"teams",
          as:"userteams"
        }
      }
    ])
    .then((doc)=>{
      console.log(doc)
      return doc
  }).catch(e =>{
      return e
  })
  } catch (error) {
    console.error(error);
  }
  return 'Done'
}


module.exports = {addUser , editUser, loginUser,getalluser,getoneuser,addfriends, getUserTeams}