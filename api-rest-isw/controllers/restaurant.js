'use strict'

const Restaurant=require('../models/restaurant')


function getRestaurant(req,res) {
  let restaurantId= req.params.restaurantId

  Restaurant.findById(restaurantId, (err, restaurant)=>{
    if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`})
    if(!restaurant) return res.status(404).send({message:`El producto no existe`})

    res.status(200).send({restaurant})
  })
}


function getRestaurants(req, res) {
  Restaurant.find({}, (err, restaurants)=>{
    if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`})
    if(!restaurants) return res.status(404).send({message:'No existen restaurantes'})
    res.send(200,{restaurants})
  })
}

function saveRestaurant(req, res) {
  let restaurant= new Restaurant()

  restaurant.nombre=req.body.nombre
  restaurant.direccion=req.body.direccion
  restaurant.idioma=req.body.idioma
  restaurant.imagen=req.body.imagen
  restaurant.descripcion=req.body.descripcion
  restaurant.latitud=req.body.latitud
  restaurant.longitud=req.body.longitud
  restaurant.mapa=req.body.mapa
  restaurant.save((err,restaurantStored)=>{
    if(err)return res.status(500).send({message:`Error al almacenar restaurante ${err}`})

    return res.status(200).send({restaurant:restaurantStored})
  })
}

function updateRestaurant(req,res) {
  let restaurantId= req.params.restaurantId
  let update = req.body
  Restaurant.findByIdAndUpdate(restaurantId, update, (err, restaurantUpdate)=>{
    if (err) return res.status(500).send({message:`Error al actualizar el restaurante ${err}`})
    res.status(200).send({restaurant: restaurantUpdate, message:'Actualizado'})
  })
}

function deleteRestaurant(req,res) {
  let restaurantId= req.params.restaurantId

  Restaurant.findById(restaurantId, (err, restaurant)=>{
    if (err) return res.status(500).send({message:`Error al borrar el restaurante ${err}`})

    restaurant.remove(err =>{
      if (err) return res.status(500).send({message:`Error al borrar el restaurante ${err}`})
      res.status(200).send({message:'El restaurant ha sido elimindo'})
    })
  })
}


module.exports={
  getRestaurant,
  getRestaurants,
  saveRestaurant,
  updateRestaurant,
  deleteRestaurant
}
