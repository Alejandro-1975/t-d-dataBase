const mongoose = require('mongoose')

let Comments = new mongoose.Schema ({
    // _id : Types.ObjectId,
    body : {
        type : String,
        required : true
    },
    creationDate :  {
        type : Date,
        required : true
    },
    dislikesCount :  {
        type : Number,
        default:0,
    },
    likesCount: {
        type : Number,
        default:0,
        
    },  
    productId: {
        type: String,
        required : true
    }
    
})
module.exports = mongoose.model ('Comments', Comments)