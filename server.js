// Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080

const server =app.listen(port, listening);
function listening(){
    console.log("server is running")
    console.log("Runnig on localhost:",port)
}
const projectData = []

app.get("/get",getData)
function getData(req,res){
    console.log(projectData)
    res.send(projectData)
}
app.post("/post",postData)
function postData(req,res){
    console.log("posteddd")
    newEntry={
        temp:req.body.temp,
        date:req.body.date,
        user:req.body.user
    }
    projectData.push(newEntry)
}
