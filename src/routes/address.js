const router = require('express').Router()
const Address = require('../schemas/Address')


// http://localhost:4000/adress
router.get('/', function  (req,res){
// enviar listado de todas las direcciones
address
    .find()
    .exec()
    .then(function (address){
        res.send(address)
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})

// http://localhost:4000/address/123

router.get('/:id', function(req,res){
    //enviar detalle de la direccion con el id de la url 
    address
    .findById(req.params.id)
    .then(function (address){
        res.send(address)
    })
    .catch(function(){
        res.send({message:'error'}) 
    })
 

})

router.post('/', function(req,res){
    //enviar el id de la base de datos
   let address = new Address(req.body)
   address
    .save()
    .then(function (address){
        res.send({message: address._id})
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})


//para editar
router.patch('/:id', function(req,res){
    //enviar mensaje de confirmacion
    address
        .findByIdAndUpdate(req.params.id,{

        })
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
    address
        .deletOne({_id:req.params.id})
        .then(function (){
            res.send({message:'deleted'})
        })
        .catch(function(){
            res.send({message:'error'}) 
        })
    

})

module.exports = router