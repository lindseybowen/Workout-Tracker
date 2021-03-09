const router = require ("express").Router()

const db = require("../models")

router.get ("/api/workouts", function (req, res){
    db.Workout.find().then(function(result){
        res.json(result)
    })
})

router.put ("/api/workouts", function (req, res){
    db.Workout.find().then(function(result){
        res.json(result)
    })
})


module.exports = router 