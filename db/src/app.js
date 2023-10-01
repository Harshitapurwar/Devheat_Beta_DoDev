const User = require("../models/UserSchema");
const bcryptjs=require("bcrypt.js");

//password
const securePasssowrd=async(password)=>{
    try{
        const passwordHash=await bcryptjs.hash(password,10);
        return passwordHash;
    }
    catch(error){
        res.status(400).send(error.messgae);
    }
}

//login
const user_login=async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        const userdata=await User.findOne({email:email});
        if(userData){
           const passwordMatch=await bcrypt.jscompare(password,userData.password);
           if(passwordMatch){
            const userResult={
                _id:userData._id,
                name:userData.email,
                email:userData.email,
                password:userData.password,

            }
            const response={
                success:true,
                msg:"User details",
                data:usereResult
            }
            res.status(200).send()
           }
        }
        else{
            res.status(200).send({success:false,msg:"Login details are incorrect"});
        }
    }
   
    catch(error){
        res.status(400).send(error.message);
    }
}
module.exports={user_login,securePasssowrd}