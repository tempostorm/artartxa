const express = require('express');
const router = express.Router();
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



module.exports = router;
