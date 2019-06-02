import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestauranteApiService {
  public url = GLOBAL.url;
  constructor(
    private _http:HttpClient

    ) { }

    getRestaurants(){
      return this._http.get(this.url+'/restaurant').toPromise();
    }

    public getRestaurant(id){
      return this._http.get(this.url+'/restaurant/'+id).toPromise();
    }
}
