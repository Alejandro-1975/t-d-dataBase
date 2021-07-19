const router = require('express').Router()
const category = require('../schemas/Category')


// http://localhost:4000/categories
router.get('/', function  (req,res){
// enviar listado de todas las categorias

category
    .find()
    .exec()
    .then(function (categories){
        res.send(categories)
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})

// http://localhost:4000/categories/123

router.get('/:id', function(req,res){
    //enviar detalle de la categoria con el id de la url 
    category
    .findById(req.params.id)
    .then(function (category){
        res.send(category)
    })
    .catch(function(){
        res.send({message:'error'}) 
    })
 

})

router.post('/', function(req,res){
    //enviar el id de la base de datos
   let category = new category(req.body)
   category
    .save()
    .then(function (category){
        res.send({message: category._id})
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})


//para editar
router.patch('/:id', function(req,res){
    //enviar mensaje de confirmacion
    category
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
    category
        .deletOne({_id:req.params.id})
        .then(function (){
            res.send({message:'deleted'})
        })
        .catch(function(){
            res.send({message:'error'}) 
        })
    

})

module.exports = router