/**
 * Created by artur.tarverdyan on 6/20/2017.
 */
const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;
const {user_model} = require('./mongo_models');
const express = require('express');


mongoose.connect('mongodb://localhost/todo');
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ');
});
user_model.create({name: "test", lastname: "test1" })
    .then(doc =>{
        console.log(doc)
    })
