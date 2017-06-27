const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;
const {user_model} = require('./mongo_models');



mongoose.connect('mongodb://localhost/todo');
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ');
});
// const mongo =require('mongodb').MongoClient;
const url='mongodb://localhost:27017/todo';
=======
const mongo =require('mongodb').MongoClient;
const url='mongodb://localhost:27017/todo'
>>>>>>> 901ea6b9dc4f27b356596c099e349cdade654e8b
router.get('/', (req, res) => {
    res.render('node');
});

router.get('/ok', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});


router.post('/login', (req, res) => {
    console.log(req.body.name)
    user_model.findOne({name : req.body.name, lastname: req.body.lastname},null, {lean:true})
        .then(doc =>{
            console.log(doc);
            //console.log(Object.keys(doc))

    if(doc) {
        res.redirect('/ok');
    }
    else {
        res.send("error")
    }
});
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