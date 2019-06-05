'use strict'

const mongoose = require('mongoose')
const User = require ('../models/user')
const service = require ('../services')


function signUp(req, res){
  const user = new User({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      idioma: req.body.idioma,
      password: req.body.password
  })



  user.avatar=user.gravatar()
  user.save((err)=> {
    if(err) return res.status(500).send({message: `Error al crear el usuario: ${err}`})

    return res.status(201).send({message:'Usuario registrado', token: service.createToken(user)})
  })
}

function signIn(req, res) {
  //console.log(typeof req.body.email)
  User.findOne({email:req.body.email},(err,user)=>{
    //console.log(user)
    if(err) return res.status(500).send({message: err})
    //console.log(user);
    
    if(!user) return res.status(404).send({message:'No existe el usuario'})
    user.comparePassword(req.body.password,(err, isMatch)=>{

      if(err) return res.status(500).send({message: err})
      if(!isMatch) return res.status(401).send({message:"Acceso denegado"})
      req.user = user
      return res.status(200).send({ message:"Te has logeado correctamente", token: service.createToken(user), user:user  })
    })

  })
}

module.exports={
  signUp,
  signIn
}
