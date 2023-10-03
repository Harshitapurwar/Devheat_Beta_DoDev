const express = require('express')
const { addHackathon } = require('../db/controller/hackathonController')
const { addTeam , getallteam, getoneteam } = require('../db/controller/teamController')
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

router.post('/add' , async(req,res)=>{
    const data= req.body
    console.log(data.teamname)
    try {
     await addTeam(data.id , data.teamname)
     res.send('Team created successfully')
    } catch (error) {
     res.send(error)
    }
    
 })



module.exports = router;