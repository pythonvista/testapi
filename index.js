const express = require('express');
const app = express();
// const usersRoute = require('./src/routes/users')
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors())
app.use(bodyParser.json())
// app.use('/users', usersRoute);


app.get('/', (req, res)=>{
    data = {
        name: 'Victor',
        name2: 'ayo',
        name3:'Mr Femi'    } 
    // res.sendStatus(200)
    res.send(data)
})

app.post('/', (req, res)=>{
   console.log(req.body)
    res.send(req.body.name)
})










app.listen(3000,()=>{
    console.log("Server started")
});