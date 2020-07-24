const express = require('express');
var mysql = require('mysql');

var pool  = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'zoho_crm',  
    multipleStatements: true
});

let connection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, conn) {
            if (err) {
                console.log('MySQL connection error:',err.stack);
                reject(err);
            }
            else {
                console.log('Connected to MySQL...', conn.threadId);
                resolve(conn);
            }
        })
    })
}

module.exports = { connection: connection };


