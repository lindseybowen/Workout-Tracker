const express = require ("express")
const app = express()

const PORT = process.env.PORT || 3001 

app.use(express.static("public"))

//data paser - unwrap client data to stores in req.body
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const mongoose = require("mongoose")
  
mongoose.connect(
 process.env.MONGODB_URI || 'mongodb://localhost/workout',
     {
        useNewUrlParser: true,
       useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
 );
      
  
app.use(require("./routes/api"))
app.use(require("./routes/html"))

app.listen(PORT,function(){
    console.log("app is listening on"+PORT)
}) 

