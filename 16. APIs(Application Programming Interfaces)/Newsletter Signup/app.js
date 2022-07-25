const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) =>{
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.eMail;

    console.log(firstName, lastName, email);
});

app.listen(3000, () =>{
    console.log('server is running on port 3000');
});