/**
 * Created by Comp4 on 08.06.2017.
 */
const express = require('express');
const router = express.Router();
const fs=require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/index',urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('index',{qs: req.query})

   /* res.writeHead(200,{"Content-type":"text/html"});
    fs.readFile('index.html',null,(error,data)=>{
        if(error){
            res.writeHead('404');
            res.write('filenotfound')
        }
        else   {
            res.write(data)
        }res.end()
    })
*/
});

router.get('/',  (req, res) => {
    res.send('Hello World!');
});

router.post('/login',  (req, res) => {
    console.log(req.body);
    res.send('Perfect!');
});
module.exports = router;