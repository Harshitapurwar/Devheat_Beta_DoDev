const express = require('express')
const { addHackathon } = require('../db/controller/hackathonController')
const router = express.Router()


router.get('/hack', (req , res)=>{
    res.send('Trying to get hackathonss')
})
router.get("/hacks/:id" , (req , res) => {
    const name = req.params.id;
    res.send(`hackathon name is ${name}`)
})
router.post('/add' , async(req,res)=>{
    const data= req.body
    console.log(data.id)
    try {
     await addHackathon(data.id , data.pcount)
     res.send('HAckathon created successfully')
    } catch (error) {
     res.send(error)
    }
    
 })



module.exports = router;