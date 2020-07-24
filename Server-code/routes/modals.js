var express = require('express');
var router = express.Router();
var connect = require('./connection');
var moment = require('moment');


router.post('/signUp', (req, res) => {
    console.log('inside signup', req.body);
    let user =  req.body;
    let sql_post_signup_data = `insert into list_users SET?`;
    
    var values = {'username': user.username, 'email': user.email, 'phone': user.phone,
                  'password': user.password,'first_login': 'Y', 'created_on': moment(new Date())}
    
    connect.connection()
        .then((con) => {
            con.query(sql_post_signup_data, values, (err, result) => {
                con.release();
                if (err) {
                    console.log('error is ', err)
                    res.json({ status: 0 });
                }
                else {                   
                    console.log('Error after post', result);
                    res.json({ status: 1 })
                }
            })
        })
        .catch((e) => {
            console.log('Error in connecing to db', e);
            res.json({ status: -2 })
        })
})


router.post('/signIn', (req, res) => {
    
    console.log('inside signin', req.body);
    let sql_login_data = `select * from list_users where email='${req.body.email}'`;
    connect.connection()
        .then((con) => {
            con.query(sql_login_data, (err, result) => {
                con.release();
                if (err) {
                    console.log('error is ', err)
                    res.json({ status: 0 });
                }
                if(result.length>0){
                    if(result){
                        console.log("Checking password: " + result[0].password)
                        if (result[0].password == req.body.password) {
                            // console.log('db anme',config.CONNECTION_STRINGS[config.database]['database']);
                            // config.CONNECTION_STRINGS[config.database]['database'] = result[0].db_name;
                            // console.log('db anme new',config.CONNECTION_STRINGS[config.database]['database']);
                            res.json({ status: 1 })
                        }
                        else {
                            res.json({ status: -1 })
                        }
                    }}
                    else {                        
                        res.json({ status: -2 })
                    }
                
            })
        })
        .catch((e) => {
            console.log('Error in connecing to db', e);
            res.json({ status: -3 })
        })
})

module.exports = router;