const express = require('express')
const router = express.Router()
const {addUser , editUser} = require('../db/controller/userController')

router.get('/all', (req , res)=>{
    res.send('Trying to get users!')
})


router.get('/:id' , (req , res)=>{
    const id = req.params.id
    res.send(`Getting user ${id}`)
})

router.post('/add' , async(req,res)=>{
   const data= req.body
   console.log(data.firstName)
   try {
    await addUser(data.firstName , data.lastName , data.email, data.password)
    res.send('User created successfully')
   } catch (error) {
    res.send(error)
   }
   
})

module.exports = router


