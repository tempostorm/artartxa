/**
 * Created by artur.tarverdyan on 6/20/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema= new Schema({},{
    strict : false,
    versionKey : false
});
const products= new Schema({
    id :{type : Number, required:true},
    name :{type : String},
    price :{type : String},
    os :{type : Array}



},{
    // strict : false,
    versionKey : false
});
const news= new Schema({
    title:{type : String, required:true},
    author :{type : String},
    description :{type : String},
    date :{type : Number},




},{
    // strict : false,
    versionKey : false
});
const user_model = mongoose.model('User', schema, 'user');
const prod_model = mongoose.model('Pord', products, 'products');
const news_model = mongoose.model('News', news, 'news')
module.exports = {user_model,prod_model};
