'use strict'

const express=require('express')
const api = express.Router( )
const userCtrl = require ('../controllers/user')
const auth = require('../middlewares/auth')
const restaurantCtrl= require('../controllers/restaurant')

api.get('/restaurant', restaurantCtrl.getRestaurants)//ver todos los restaurantes
api.get('/restaurant/:restaurantId', restaurantCtrl.getRestaurant)//ver solo un restaurante
api.post('/restaurant', restaurantCtrl.saveRestaurant)//guardar restaurante
api.put('/restaurant/:restaurantId', restaurantCtrl.updateRestaurant)//editar restaurante
api.delete('/restaurant/:restaurantId', restaurantCtrl.deleteRestaurant)//eliminar restaurante
api.post('/signup',userCtrl.signUp)//crear usuario
api.post('/signin',userCtrl.signIn)//iniciar sesión

api.get('/private', auth,  (req, res) => {
  res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api
