/**
 * Created by artur.tarverdyan on 6/20/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var  schema= new Schema({},{});
const user_model = mongoose.model('schema',schema, 'user');

module.exports = {user_model};
