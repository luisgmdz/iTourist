import { Component, OnInit } from '@angular/core';
//necesitamos mostrar datos del usuario
import { AuthService } from './../../services/auth.service';
import { RestauranteApiService } from 'src/app/services/restaurante-api.service';

@Component({
  selector: 'app-frances',
  templateUrl: './frances.component.html',
  styleUrls: ['./frances.component.scss']
})
export class FrancesComponent implements OnInit {

  public userInfo : object;
  //datos de restaurante
  public restaurantes =[];
  public restaurants;//aqui estaba el error 
  constructor(
    private _authService: AuthService,
    private _restaurantsService: RestauranteApiService
    ){
      
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
        this.llenarRestaurantes(response.restaurants);//esta
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
