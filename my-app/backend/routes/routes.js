const express=require('express')
const router = express.Router()
const {login,getFirst}=require('../controller/controller')
router.route('/').get(getFirst)
router.route('/api/login').post(login)



module.exports=router   