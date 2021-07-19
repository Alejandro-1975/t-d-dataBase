//IDENTIFICACION Y AUTENTICACION DEL USUARIO (LOGIN, REGISTRO, CONFIRMACION DE LA CUENTA, RECUPERACION DE LA CUENTA)

const router = require('express').Router()
const path = require('path')
const User = require('../schemas/User')
const nodemailer = require('nodemailer')

router.get('/register', function (req,res) {
    //devolver un formulario html
    let file = path.resolve('src', 'views', 'register.html')
    
    res.sendFile(file) 
    
    })
    router.get('/confirm', function (req,res) {
        
        
        User.findByToken(req.query.token) 
            .then (function(result) {
               
                if(result){ 
                    return  res.send('Confirmado!')
                 }
                 return  res.send('No se encontro el Usuario')
    
                })
            .catch(function(err) {
                console.log(err.message)
                return res.send('Error')
            })
    
        
        })
    
    router.post('/register', async function (req,res) {
        let user = new User(req.body)
    
        user.save().then(async u => {
            console.log(u)
       
    
        let token = md5(req.body.email + Date.now())
        console.log(token)
    
        let testAccount = await nodemailer. createTestAccount();
    
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
            },
            tls:{
                rejectUnauthorized:false,
            }
        });
    
        let info = await transporter.sendMail({
            from: '"Backend👻" <no-reply@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Has completado tu registro exitosamente", // Subject line
            text: "Bienvenido a nuestro sistema :)", // plain text body
            html: `<a href="http://localhost:4000/confirm?token=${u.confirmationToken}">
            Confirmar cuenta 
            </a>
            <b>Bienvenido a nuestro sistema :)</b>", `// html body
          });
          console.log("Message sent: %s", info.messageId);
      
    
      res.send(nodemailer.getTestMessageUrl(info))
    
    }).catch(err => {
        console.log(err)
    })
    
})

module.exports = router