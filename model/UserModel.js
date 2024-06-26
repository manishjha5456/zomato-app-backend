const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        id:{type:Number},
        f_name:{type:String},
        l_name:{type:String},
        email:{type:String},
        mobile_no:{type:Number},
        password:{type:String}
});

const UserModel = mongoose.model('user',UserSchema,'users');

module.exports = UserModel;