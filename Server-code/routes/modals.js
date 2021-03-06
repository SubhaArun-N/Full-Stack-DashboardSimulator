var express = require('express');
var router = express.Router();
var connect = require('./connection');
var moment = require('moment');
var hashing = require('./hashing');
var jwt = require('jsonwebtoken');

const jwtKey = "my_secret_key"
const jwtExpirySeconds = 300

router.post('/signUp', (req, res) => {
    console.log('inside signup', req.body);
    let user =  req.body;
    let sql_post_signup_data = `insert into list_users SET?`;

    //console.log(hashing.encrypt(user.password));
    
    var values = {'firstname': user.username, 'email': user.email, 'phone': user.phone,
                  'password': hashing.encrypt(user.password),'first_login': 'Y', 'created_on': moment(new Date())}                  
    
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
    const { username, password } = req.body
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
                        if (hashing.decrypt(result[0].password) == req.body.password) {

                            const firstname = result[0].firstname;
                            const user_id = result[0].user_id;

                            console.log(firstname);
                            console.log(user_id);

                             const token = jwt.sign({ username }, jwtKey, {
                                algorithm: "HS256",
                                expiresIn: jwtExpirySeconds,
                             })
                            
                            // console.log("token:", token)

                            // console.log('db anme',config.CONNECTION_STRINGS[config.database]['database']);
                            // config.CONNECTION_STRINGS[config.database]['database'] = result[0].db_name;
                            // console.log('db anme new',config.CONNECTION_STRINGS[config.database]['database']);
                            res.json({ status: 1, token: token, expiresIn: jwtExpirySeconds, firstname: firstname, user_id: user_id })
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




/*router.get('/me', function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, jwtKey, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      res.status(200).send(decoded);
    });
  });*/

module.exports = router;