const express = require('express');
const router = express.Router();
const {user_model,prod_model} = require('./mongo_models');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongo =require('mongodb').MongoClient;
const url='mongodb://localhost:27017/todo';


mongoose.connect(url);
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ');
});

router.get('/', (req, res) => {
    res.render('node');
});

router.get('/ok', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});
router.post('/prod',(req,res)=>{
    prod_model.create(req.body)
    // console.log("info was added")
        .then(doc => {
        res.send("prefect")
    })
        .catch(err =>{
        res.send("error " + err)
    })
})

router.post('/login', (req, res) => {
    console.log(req.body);
    let response = {"error":0}
    user_model.findOne({username : req.body.username}, null, {lean:true})
        .then(doc =>{
            console.log(doc);
            //console.log(Object.keys(doc))

    if(doc) {
        if(req.body.password = doc.password){
            response = doc;
        }
        else {
            response.error = 1;
            response.message = "incorrect password"
        }
    }
    else {
        response.error = 1;
        response.message = "incorrect username"
    }res.send(response)
})
        .catch(console.error)
})
router.get('/get', (req, res) => {
    console.log(req.body);
    prod_model.find({name: req.query.name}, null, {lean:true})
        .then(doc => {
            res.send(doc);
        })

})

router.post('/register', (req, res) => {
    //console.log(req.body);
    user_model.create(req.body)
res.send('Perfect!');
});

module.exports = router;
