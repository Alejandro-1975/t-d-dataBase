const {Schema, Types, model} = require('mongoose')
const md5 = require('md5')

let ProductSeller = new Schema ({
   
    
    aggregateRating: {
        type : Number,
       default: 0
        
    },
     
    likesCount:{
        type : Number,
       default: 0

    } ,

    
}, {
        collection: "product_sellers"
    

})


module.exports = model('ProductSeller', ProductSeller)