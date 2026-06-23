const express=require('express')
const router=express.Router()

const {adduser,getuser}=require('..controller/usercontroller')
router.post("/add",adduser)
router.get("/get",getuser)

module.exports=router