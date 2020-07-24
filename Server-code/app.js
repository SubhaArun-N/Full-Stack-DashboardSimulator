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

app.use('/auth',  modals);

app.listen(process.env.PORT, () => console.log('Server is ready on localhost:' + process.env.PORT));

