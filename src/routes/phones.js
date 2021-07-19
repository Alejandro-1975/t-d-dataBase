const router = require('express').Router()
const Phones = require('../schemas/phones')


// http://localhost:4000/phones
router.get('/', function  (req,res){
// enviar listado de todas los telefonos
phones
    .find()
    .exec()
    .then(function (phones){
        res.send(phones)
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})

// http://localhost:4000/phones/123

router.get('/:id', function(req,res){
    //enviar detalle del telefono con el id de la url 
    phones
    .findById(req.params.id)
    .then(function (phones){
        res.send(phones)
    })
    .catch(function(){
        res.send({message:'error'}) 
    })
 

})

router.post('/', function(req,res){
    //enviar el id de la base de datos
   let phones = new Phones(req.body)
   phones
    .save()
    .then(function (phones){
        res.send({message: phones._id})
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})


//para editar
router.patch('/:id', function(req,res){
    //enviar mensaje de confirmacion
    phones
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
    phones
        .deletOne({_id:req.params.id})
        .then(function (){
            res.send({message:'deleted'})
        })
        .catch(function(){
            res.send({message:'error'}) 
        })
    

})

module.exports = router