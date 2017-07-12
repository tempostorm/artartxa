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

const port  = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('running');
});