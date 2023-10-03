const express = require('express')
const router = express.Router()
const {addUser , editUser, loginUser, getalluser, getoneuser} = require('../db/controller/userController')



// router.get('/:id' , (req , res)=>{
//     const id = req.params.id
//     res.send(`Getting user ${id}`)
// })



router.get('/all',async(req,res)=>{
    try{
        const response = await getalluser()
        console.log(response)
        return res.send(response)
    }catch(error){
        return res.send(error);
    }
})

router.get('/oneuser/:id',async(req,res)=>{
    try{
        const id = req.params.id
        console.log('trying')
        const response = await getoneuser(id)
        console.log( 'response',response)
        return res.send(response)
    }
    catch(error){
        return res.send(error);
    }
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

router.post('/login', async(req , res)=>{
    const {email , password} = req.body

    // console.log(email , password)
    try {
        const response = await loginUser(email , password)
        return res.send(`login successfull , the token received is ${response}`)
    } catch (error) {
        console.log(error)
        return res.send('Invalid Credentials')
    }
})

module.exports = router


