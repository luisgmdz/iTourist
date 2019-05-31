'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
nombre: String,
direccion:String,
idioma:String,
imagen: String,
descripcion: String,
latitud: Number,
longitud: Number
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)
