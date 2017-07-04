const express = require('express');
const router = express.Router();
const {user_model} = require('./mongo_models');
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

router.post('/register', (req, res) => {
    //console.log(req.body);
    user_model.create(req.body)
res.send('Perfect!');
});
router.post('/insert',(req,res, next)=>{
    const ppl={
        username: req.body.username,
        phone_number: req.body.phone_number,
        email: req.body.email,
        password: req.body.password,
    };
    mongo.connect(url, function(err, db) {
        if(!err) {
            console.log("We are connected");
        }


        db.collection('user').insertOne(ppl,(err,result)=>{
            if(!err){
                console.log('ppl inserted')
            }
            db.close()
        })
    });
    res.redirect('/ok')
})


module.exports = router;
