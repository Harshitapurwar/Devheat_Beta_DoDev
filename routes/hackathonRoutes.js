const express = require('express')
const router = express.Router()


router.get('/hack', (req , res)=>{
    res.send('Trying to get hackathonss')
})
router.get("/hacks/:id" , (req , res) => {
    const name = req.params.id;
    res.send(`hackathon name is ${name}`)
})


module.exports = router;