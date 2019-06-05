import { Component, OnInit } from '@angular/core';
import { RestauranteApiService } from 'src/app/services/restaurante-api.service';
import { Route } from '@angular/compiler/src/core';
import { Params, ActivatedRoute } from '@angular/router';
import { resolve } from 'q';
import { Restaurante } from 'src/app/models/restaurant';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public latitud;
  public longitud;
  public id;
  public restaurante;
  
  constructor(
    
    private _restaurantService:RestauranteApiService,
    private _route:ActivatedRoute,
    ) {
      this.restaurante = new Restaurante;
      this.latitud = 19.4978
      this.longitud = -99.1269
          //console.log("hola");
    
    this._route.params.forEach(
      (params:Params)=>{
        let id = params["id"];
        this.id= id;
        this.getRestaurant(this.id);
      })
     }
    
  ngOnInit() {

  }
  
  public getRestaurant(id){
    this._restaurantService.getRestaurant(id).then(
      (result:any) =>{
        console.log(result)
        this.restaurante= result.restaurant;
      },
      error=>{
        console.log("Error");
        console.log(error);     
      }
    )
  }
}