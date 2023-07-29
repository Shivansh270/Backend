const express = require('express')
const app = express();

//use to parse req.body in express
const bodyParser = require("body-parser");
//parse the json data and add to req.body object
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log("server stated at port 3000");
});

app.get('/', (req,res) => {
    res.send("hello this is my first server")
})

app.post('/api/car', (req,res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car data submitted")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("connection done")})
.catch((error) => {console.log("error occured")})