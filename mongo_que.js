/**
 * Created by artur.tarverdyan on 6/20/2017.
 */
const mongoose  = require('mongoose');
const {user_model} = require('./mongo_models')
var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const router = express.Router();

mongoose.connect('mongodb://localhost/user');
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ');
});
router.post('/insert',(req,res, next)=>{
    const ppl={
        name: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    };
    mongo.connect(url, function(err, db) {
        if(!err) {
            console.log("We are connected");
        }


        db.collection('users').insertOne(ppl,(err,result)=>{
            if(!err){
                console.log('ppl inserted')
            }
            db.close()
        })
    });
    res.redirect('/register')
})