const express = require('express');
const app = express();
require('dotenv').config();
const mysql = require('mysql');
const cors=require('cors');
const bodyParser=require('body-parser');

app.use(cors()); 

app.use(bodyParser.json());

//const jsonParser = bodyParser.json();

var modals = require('./routes/modals');

app.use('/auth',  require('./routes/modals'));

app.listen(process.env.PORT, () => console.log('Server is ready on localhost:' + process.env.PORT));

/*app.get('/home/api-integration', (req, res) => {
    res.json({
        "statusCode": 200, 
        "statusMessage": "Success"
    })   

})*/