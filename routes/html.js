const router = require("express").Router()
 
const path = require("path")
router.get ("/",function(req,res){
   res.sendFile(path.join(__dirname,"../public/index.html") ) 
})

const path = require("path")
router.get ("/stats",function(req,res){
   res.sendFile(path.join(__dirname,"../public/stats.html") ) 
})

const path = require("path")
router.get ("/exercise",function(req,res){
   res.sendFile(path.join(__dirname,"../public/exercise.html") ) 
})

module.exports = router 