
const md5 = require('md5')
const mongoose = require('mongoose');

let User = new mongoose.Schema ({
    //_id : Types.ObjectId,
    email : {
        type : String,
        required : true
    },
    password :  {
        type : String,
        required : true
    },
    registrationDate : {
        type : Date,
        default : Date.now
    },
    confirmationDate: Date,
    confirmationToken : {
        type : String,
        required : true,
        default : function (){
            return md5(Date.now())
        }
    },
})

// CREACION DE UN METODO ESTATICO QUE NOS PERMITE BUSCAR EL USUARIO POR EL TOKEN
User.statics.findByToken = function (token) {
    return this.findOne({confirmationToken: token})
}
// CREACION DE UN METODO QUE NOS PERMITE BUSCAR EL USUARIO POR EL MAIL
User.methods.findByEmail = function (cb) {
    return mongoose.model('User').find({email: this.email}, cb)
}



module.exports = mongoose.model('User', User)