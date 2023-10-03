const express = require('express')
const { addHackathon, addTeamToHackthon, getallhackathon,getonehackathon } = require('../db/controller/hackathonController')
const { addHackthonToTeam } = require('../db/controller/teamController')

const router = express.Router()


// router.get('/hack', (req , res)=>{
//     res.send('Trying to get hackathonss')
// })
// router.get("/hacks/:id" , (req , res) => {
//     const name = req.params.id;
//     res.send(`hackathon name is ${name}`)
// })
router.get('/hack',async(req,res)=>{
    try{
        const response = await getallhackathon()
        console.log(response)
        return res.send(response)
    }catch(error){
        return res.send(error);
    }
})

router.get('/onehackathon/:id',async(req,res)=>{
    const id=req.params.id;
    console.log(id)
    try{
        console.log('trying')
        const response = await getonehackathon(id)
        console.log( 'response',response)
        return res.send(response)
    }
    catch(error){
        return res.send(error);
    }
})



router.post('/add' , async(req,res)=>{
    const data= req.body
    console.log(data.id)
    try {
     await addHackathon(data.id , data.pcount,data.Deadline,data.Description,data.participant_teams)
     res.send('HAckathon created successfully')
    } catch (error) {
     res.send(error)
    }
    
 })


//hackathon controller
//  router.post('/addteam', async(req , res)=>{
//     const {hackthon_id , team_id} = req.body
//     // console.log(hackthon_id , team_id)
//     const response = await addTeamToHackthon(hackthon_id, team_id)

//     // console.log(response)

//     if(response=="Done"){
//         return res.send('Team added to hackthon')
//     }

//     return res.send("Not done")

//  })

 //team controller
 router.post('/addteamandback', async(req , res)=>{
    const {hackthon_id , team_id} = req.body
    // console.log(hackthon_id , team_id)
    const response1 = await addHackthonToTeam(hackthon_id, team_id)

    const response2 = await addTeamToHackthon(hackthon_id , team_id)



    // console.log(response)

    if(response1=="Done" && response2=="Done"){
        return res.send('Team added to hackthon and back')
    }

    return res.send("Not done")

 })



module.exports = router;