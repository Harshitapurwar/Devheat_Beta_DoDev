const express = require('express')
const router = express.Router()


router.get('/tt', (req , res)=>{
    res.send('Trying to get teams')
})
router.get("/tt1/:team_name" , (req , res) => {
    const name1 = req.params.team_name;
    res.send(`team name is ${name1}`)
})



module.exports = router;