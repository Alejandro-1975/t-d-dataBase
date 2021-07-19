const router = require('express').Router()
const { query } = require('express')
const Products = require('../schemas/Product')


// http://localhost:4000/products
router.get('/', function  (req,res){
// enviar listado de todas los productos
let query = {
        
    "$and" : [
        {
            price : {
                     "$gte" : req.query.price_min     
                    }
        },
        {
            price : {
                    "$lte" : req.query.price_max   
                    }
        },
     ]
    }

    if (req.query.brand) {
        query.brand = req.query.brand
    }
    
    let result= products.find(query)

    if(req.query.order) {
        result.sort({[req.query.order] : req.query.dir === 'asc' ? 1:-1})
    }
    
    if(req.query.start) {
        result.skip(Number(req.query.start))
    }
    
    result.limit(10)
    

     
        result.then(results =>{
            res.send(results)
        
        }).catch(err => {
            console.log(err)
            res.send({message :'error'})
    })

 })

// // http://localhost:4000/products/123

router.get('/:id', function(req,res){
    //enviar detalle del producto con el id de la url 
    products
    .findById(req.params.id)
    .then(function (product){
        products.views_count= products.views_count+1

        products.save().then(product => {
            res.send(product)  
        })
        
    })
    .catch(function(err){
        console.log(err)
        res.send({message:'error'}) 
    })
 

})

router.post('/', function(req,res){
    //enviar el id de la base de datos
   let products = new Products(req.body)
   products
    .save()
    .then(function (products){
        res.send({message: products._id})
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})


//para editar
router.patch('/:id', function(req,res){
    //enviar mensaje de confirmacion
    products
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function (){
            res.send({message:'updated'})
        })
        .catch(function(){
            res.send({message:'error'}) 
        })
    
   
})   

//para poder borrar

router.delete('/:id', function(req,res){
    //enviar mensaje de confirmacion
    products
        .deletOne({_id:req.params.id})
        .then(function (){
            res.send({message:'deleted'})
        })
        .catch(function(){
            res.send({message:'error'}) 
        })
    

})

module.exports = router



