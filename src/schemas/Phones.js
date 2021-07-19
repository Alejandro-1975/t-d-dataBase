const mongoose = require('mongoose');

let Phones = new mongoose.Schema ({
    // _id : Types.ObjectId,
    countryCode : {
        type : String,
        required : true
    },
    areaCode :  {
        type : String,
        required : true
    },
    number :  {
        type : String,
        required : true
    },
    userId: {
        type: String,
        required : true
    }
    
})
module.exports = mongoose.model('Phones', Phones)