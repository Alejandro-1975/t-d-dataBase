const mongoose = require('mongoose')

let Photos = new mongoose.Schema ({
    // _id : Types.ObjectId,
   productoId : {
        type : ObjectId,
        ref: 'Products', 
        required : true
    },
    url :  {
        type : String,
        required : true
    },
       
})
module.exports = mongoose.model('Photos', Photos)