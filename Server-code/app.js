const express = require('express');
const app = express();
require('dotenv').config();
const mysql = require('mysql');
const cors=require('cors');
const bodyParser=require('body-parser');
var connect = require('./routes/connection');

app.use(cors()); 

app.use(bodyParser.json());

//const jsonParser = bodyParser.json();

var modals = require('./routes/modals');

app.use('/auth',  modals);

app.post('/pages/api-integration', (req, res) =>{    
    let user = req.body;
    var sql = 'INSERT INTO api_integration SET?';
    var values = {'client_id': user.client_id, 'client_secret': user.client_secret,
                  'website_url': user.website_url,'grant_token': user.grant_token}
    
     connect.connection()
        .then((con) => {
            con.query(sql, values, (err, rows, fields) => {
                if(!err){
                    res.send({status:1});
                }else{
                    console.log(err);
                }
            })
        })
});


app.post('/pages/quickbooks-integration', (req, res) =>{   
    console.log("Inside quickbooks integration"); 
    let user = req.body;
    var sql = 'INSERT INTO quickbooks_integration SET?';
    var values = {'client_id': user.client_id, 'client_secret': user.client_secret,
                  'website_url': user.website_url}
    
     connect.connection()
        .then((con) => {
            con.query(sql, values, (err, rows, fields) => {
                if(!err){
                    res.send({status:1});
                }else{
                    console.log(err);
                }
            })
        })
});


app.listen(process.env.PORT, () => console.log('Server is ready on localhost:' + process.env.PORT));

