const express = require('express');
const serve  = require('express-static');
var jade = require('jade');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./route');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(serve(__dirname + '/views'));
app.set('view engine', 'jade');
app.use("/", router);


app.listen(3000, () =>{
    console.log('running');
});