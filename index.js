/**
 * Created by Comp4 on 08.06.2017.
 */

//module dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./route');
//const morgan = require('morgan');
//const expStatic = require('express-static');
const jade = require('jade');
console.log(__filename);
//middleaware express
//app.use(expStatic('/views'+__filename));
app.set('view engine', 'ejs');
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use("/", router);



app.listen(3030, console.log('OK'));
