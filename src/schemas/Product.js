const {Schema, Types, model} = require('mongoose')


let Product = new Schema ({
    // _id : Types.ObjectId,
    name : {
        type : String,
        required : true
    },
    price :  {
        type : Number,
        required : true
    },
    description: {
        type : String
    },

    aggregateRating: {
        type : Number,
       default: 0
        
    },
   stock: {
        type : Number,
        default : 1
    },
    category: {
        type: String,
        required: true
    },
    model: {
        type: String,
    },

    brand : {
        type : String,
        required : true
    },

    sold_count:{
        type : Number,
        default : 0
    },

    views_count:{
        type : Number,
       default: 0

    } ,

    likes_count:{
        type : Number,
       default: 10

    } ,
    seller_id: {
        type : String,
        required : true
    }, 
}, {
        collection: "products"
    

})


module.exports = model('Product', Product)