const express = require('express')
const { addHackathon } = require('../db/controller/hackathonController')
const { addTeam } = require('../db/controller/teamController')
const router = express.Router()


router.get('/tt', (req , res)=>{
    res.send('Trying to get teams')
})
router.get("/tt1/:team_name" , (req , res) => {
    const name1 = req.params.teamname;
    res.send(`team name is ${name1}`)
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