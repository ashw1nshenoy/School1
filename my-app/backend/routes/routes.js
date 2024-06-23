const express=require('express')
const router = express.Router()
const {user,getFirst}=require('../controller/controller')
router.route('/').get(getFirst)
router.route('/api/login').post(user)



module.exports=router