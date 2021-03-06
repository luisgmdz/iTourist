'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const bcrypt = require ('bcrypt-nodejs')
const crypto = require ('crypto')



const UserSchema = new Schema({
  email:{type: String, lowercase:true},
  nombre: String,
  apellido: String,
  idioma: String,
  avatar: String,
  password:{type: String},
  signupDate: {type: Date, default: Date.now()},
  lastLogin: Date
})

UserSchema.pre('save', function (next) { //se modificó el next => //"arrow function"
  let user = this

  if(!user.isModified('password')) return next()
  bcrypt.genSalt(10, (err, salt)=>{
    if(err) return next(err)
    bcrypt.hash(user.password, salt, null, (err, hash)=>{
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch)=>{
    cb(err, isMatch)
  })
}

UserSchema.methods.gravatar = function (){
  if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`
  const md5 =  crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}
module.exports = mongoose.model('User', UserSchema)
