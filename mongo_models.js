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
const user_model = mongoose.model('User', schema, 'user');
const prod_model = mongoose.model('Pord', products, 'products')
module.exports = {user_model,prod_model};
