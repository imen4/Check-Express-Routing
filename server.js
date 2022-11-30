//require express
const express= require('express')
const logger= require('./middleware/logger')
//const members=require('./members')
const app= express();
const PORT= 8080;

//app use middleware logger
app.use(logger)

//serve the static files
app.use(express.static(__dirname + "/public"))

/*//get members
app.get("/api/members",(req,res)=>{
    res.send(members)
})

app.get("/api/members/:id",(req,res)=>{
    res.send(members.filter((member)=>member.id === parseInt(req.params.id)))
})*/

app.listen(PORT, (err)=>{
    err? console.log(err)
    :console.log(`server is running on port ${PORT}...`)
})
