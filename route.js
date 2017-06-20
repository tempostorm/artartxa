const express = require('express');
const router = express.Router();
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

module.exports = router;