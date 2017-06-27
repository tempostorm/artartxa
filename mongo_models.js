/**
 * Created by artur.tarverdyan on 6/20/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema= new Schema({},{
    strict : false,
    versionKey : false
});
const user_model = mongoose.model('User', schema, 'user');

module.exports = {user_model};
