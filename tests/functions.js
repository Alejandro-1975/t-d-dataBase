const mongoose = require('mongoose');
const User = require ('../src/schemas/User')

const Profile = require ('../src/schemas/Profile')

const Phones = require ('../src/schemas/Phones')


const Category = require ('../src/schemas/Category')


module.exports = {
    findUsers(){
//METODO ESTATICO O METODO DE CLASE
    //     User.find().then(users => {
    //         console.log(users)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    
    
//METODO DE INSTANCIA new=instancia
        // let user = new User ({email:"dos@gmail.com"})
        // user.findByEmail()
        // .then(u => console.log(u))
        // .catch(err => console.log(err))

        // User.findByToken("6adb9fd6dd4994361cb195e64219de83")
        // .then(u => console.log(u))
        // .catch(err => console.log(err))

        },

    createUser(){
// new = instancia
        let newUser = new User({email:"cinco@gmail.com", password : "asdgasg"})
    
//metodo de instancia
        newUser.save()
        .then(user => {
            console.log('el id del usuario es' + user._id)
        })
        .catch(err => {
            console.error(err)
        })
    },

    createProfile(){
        let newProfile = new Profile({firstName: "Alejandro", lastName : "Acosta", birthDate: new Date(1975,0,26) ,  professionalRegistration :"97-01" , userId : "60d3c0d6d47f4c3120cd12a9"})
    
        newProfile.save()
        .then(profile => {
            console.log('el id del usuario es' + profile._id)
        })
        .catch(err => {
            console.error(err)
        })
    },

    createPhones(){
        let newPhones = new Phones({countryCode: "+54", areaCode : "3498", number: "470480" ,  userId : "60d3c0d6d47f4c3120cd12a9"})
    
        newPhones.save()
        .then(phone => {
            console.log('el id del usuario es' + phone._id)
        })
        .catch(err => {
            console.error(err)
        })
    },


    createCategory(){
        let newCategory = new Category({name: "operatoria", categoryId : "60d3c0d6d47f4c3120cd12a9"})
    
        newCategory.save()
        .then(category => {
            console.log('el id del usuario es' + category._id)
        })
        .catch(err => {
            console.error(err)
        })
    },

    

}