const express = require('express')
const { addHackathon } = require('../db/controller/hackathonController')
const { addTeam , getallteam, getoneteam, jointeamanduser } = require('../db/controller/teamController')
const { getoneuser } = require('../db/controller/userController')
const router = express.Router()


// router.get('/tt', (req , res)=>{
//     res.send('Trying to get teams')
// })
// router.get("/tt1/:team_name" , (req , res) => {
//     const name1 = req.params.teamname;
//     res.send(`team name is ${name1}`)
// })

router.get('/alltt',async(req,res)=>{
    try{
        console.log('trying')
        const response = await getallteam()
        console.log( 'response',response)
        return res.send(response)
    }
    catch(error){
        return res.send(error);
    }
})

router.get('/oneteam/:id',async(req,res)=>{
    const id=req.params.id;
    console.log(id)
    try{
        console.log('trying')
        const response = await getoneteam(id)
        console.log( 'response',response)
        return res.send(response)
    }
    catch(error){
        return res.send(error);
    }
})

router.post('/addteam' , async(req,res)=>{
    const data= req.body
    console.log(data.team_name)
    try {
     await addTeam(data.user_id, data.team_name)
     res.send('Team created successfully')
    } catch (error) {
     res.send(error)
    }
    
 })

 //joinfriendandtaem
 router.post('/jointeamuser', async(req , res)=>{
    const {team_id,user_id} = req.body

    console.log()
    try {
        const response = await jointeamanduser(team_id,user_id)
        console.log(response)
        return res.send(`friend added to team and return succcessful ${response}`)
    } catch (error) {
        console.log(error)
        return res.send('team and user not joined')
    }
})



module.exports = router;