import { Component, OnInit } from '@angular/core';
//necesitamos mostrar datos del usuario
import { AuthService } from './../../services/auth.service';
import { RestauranteApiService } from 'src/app/services/restaurante-api.service';

@Component({
  selector: 'app-aleman',
  templateUrl: './aleman.component.html',
  styleUrls: ['./aleman.component.scss']
})
export class AlemanComponent implements OnInit {

  public userInfo : object;
  //datos de restaurante
  public restaurantes =[];
  public restaurants;//aqui estaba el error 
  constructor(
    private _authService: AuthService,
    private _restaurantsService: RestauranteApiService
    ){ 
      this.restaurants= new Object;
    }
    
    ngOnInit() {
      console.log(localStorage)
      this._authService.getUserData().then(data=>{
        this.userInfo = data;
        this.getRestaurants();
      });
    }
    
    public getRestaurants(){
      
    this._restaurantsService.getRestaurants().then(
      response =>{
        console.log(response);
        console.log("Obtuvimos los bares correctamente");
        //this.llenarRestaurantes(response.restaurants);
      },
      error =>{
        console.log("ERROR");
        console.log(<any>error);
      }
    )

    
  }

  public llenarRestaurantes(response){
    response.forEach(restaurante => {
      this.restaurantes.push(restaurante)
    });
  }
}
