var mysql = require('mysql');
var config;

config = {
    mysql_pool : {
        host:'localhost',
        user: 'root',
        password: '*****',   //mysql password
        database: 'zoho_crm',  
        multipleStatements: true
    }
};

module.exports = config;
