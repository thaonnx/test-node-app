const express = require('express')
const app = express()
const bodyParser = require('body-parser')

console.log("Logiteck K380s")

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/'))

app.post('/save-task', function(req, response){
    const taskObject = req.body
    // connect database
    // saves new task in database
    console.log("saved task: ", taskObject.task)
    response.send({savedTask: taskObject.task})
})

app.get('/get-tasks', function(req, jsonRes) {
    const tasks = [
        "Write JS code",
        "Study TOEFL iBT",
        "Hit the gymn"
    ]
    jsonRes.send({tasks: tasks})
})


app.listen(3000, function ()  {
    console.log("app listening on port 3000")
})
