const mongoose = require('mongoose');
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const authRouter = require('./src/routes/auth')
const categoriesRouter= require('./src/routes/categories')
const addressRouter= require('./src/routes/address')
const phonesRouter= require('./src/routes/phones')
const productsRouter= require('./src/routes/products')
const Product = require('./src/schemas/Product')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/itmaster_ecommerce', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//request, response

app.use('/api/auth', authRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/address', addressRouter)
app.use('/api/phones', phonesRouter)
app.use('/api/products', productsRouter)


app.get ('/', function (req,res) {
    res.send('Bienvenido a backend')

})

app.get('/products', function(req,res){

    //LISTADO DE PRODUCTOS

})

app.get('/products/create', function(req,res){

    //MOSTRAR FORMULARIO DE ALTA DE PRODUCTOS
    res.sendFile(__dirname + '/src/views/products-create.html')

})
app.post('/products/', function(req,res){
 // RECIBIR DATOS DEL FORMULARIO 
 // GUARDAR DATOS DEL FORMULARIO
    let schema = new Product({
     ...req.body,
     seller_id:123556
 })


 schema.save().then(()=>{
    res.status(201).send({message:'Created'})

 }).catch(err => {
     console.log(err)
     res.status(422).send({message:err})
 })
    
   
})



app.listen(4000)




