const mongoose = require('mongoose');

let Category = new mongoose.Schema ({
//   _id : Types.ObjectId,
    categoryId : {
        type : Number,
        required : true,
        ref: 'Category'
    },
   name :  {
        type : String,
        required : true,
        unique : true, 
    },
    
    
})
module.exports = mongoose.model('Category', Category)