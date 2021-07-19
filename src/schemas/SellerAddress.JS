const mongoose = require('mongoose')

let SellerAddress = new mongoose.Schema ({
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
    product_seller_id: {
        type : String,
        required : true
    }, 
    
})
module.exports = mongoose.model('SellerAddress', SellerAddress)