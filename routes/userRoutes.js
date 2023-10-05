const express = require('express')
const router = express.Router()

const {addUser , editUser, loginUser, getalluser, getoneuser, addfriends} = require('../db/controller/userController')



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

router.post('/signup' , async(req,res)=>{
   const data= req.body
   console.log(data)
   try {
    const response = await addUser(data.firstName , data.lastName , data.email, data.password, data.skills)
    res.json({id:response})
   } catch (error) {
    res.send(error)
   }
   
})

router.post('/login', async(req , res)=>{
    const {email , password} = req.body

    console.log(email , password)
    try {
        const response = await loginUser(email , password)
        // console.log(response)
        // return res.send(response)
        return res.json({"id":response})
    } catch (error) {
        console.log(error)
        return res.send('Invalid Credentials')
    }
})


//add friend
router.post('/addfriend', async(req , res)=>{
    const {id1 , id2} = req.body

    console.log(id1 , id2)
    try {
        const response = await addfriends(id1,id2)
        console.log(response)
        return res.send(`friend added succcessful ${response}`)
    } catch (error) {
        console.log(error)
        return res.send('frinds not added')
    }
})



module.exports = router


