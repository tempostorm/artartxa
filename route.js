const express = require('express');
const router = express.Router();
const mongo =require('mongodb').MongoClient;
const url='mongodb://localhost:27017/todo'
router.get('/', (req, res) => {
    res.render('node');
});

router.get('/ok', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});

router.post('/login', (req, res) => {
    console.log(req.body);
res.send('Perfect!');
});

router.post('/register', (req, res) => {
    console.log(req.body);
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