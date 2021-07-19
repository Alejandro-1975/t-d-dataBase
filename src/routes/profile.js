const router = require('express').Router()
const Profile = require('../schemas/Profile')


// http://localhost:4000/adress
router.get('/', function  (req,res){
// enviar listado de todas las direcciones
profile
    .find()
    .exec()
    .then(function (profile){
        res.send(profile)
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})

// http://localhost:4000/profile/123

router.get('/:id', function(req,res){
    //enviar detalle de la direccion con el id de la url 
    profile
    .findById(req.params.id)
    .then(function (profile){
        res.send(profile)
    })
    .catch(function(){
        res.send({message:'error'}) 
    })
 

})

router.post('/', function(req,res){
    //enviar el id de la base de datos
   let profile = new Profile(req.body)
   profile
    .save()
    .then(function (profile){
        res.send({message: profile._id})
    })
    .catch(function(){
        res.send({message:'error'}) 
    })

})


//para editar
router.patch('/:id', function(req,res){
    //enviar mensaje de confirmacion
    profile
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