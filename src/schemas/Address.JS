const mongoose = require('mongoose')

let Address = new mongoose.Schema ({
    //_id : Types.ObjectId,
    country : {
        type : String,
        required : true
    },
    street :  {
        type : String,
        required : true
    },
    streetNumber :  {
        type : Number,
        required : true
    },
    city: {
        type : String,
        required : true
        
    },
   zipCode: {
        type : Number,
        required : true
    },
    userId: {
        type: String,
        required : true
    }
    
})
module.exports = mongoose.model('Address', Address)