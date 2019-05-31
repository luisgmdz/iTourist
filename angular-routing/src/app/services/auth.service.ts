import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http:HttpClient
  ){ }

  public isAuthenticated():boolean{
    const userData = sessionStorage.getItem('token');
    console.log("este es tu token"+userData);
    if(userData){
      return true;
    }else{
      return false;
    }
  }

  public async getUserData(){
    const userData = await sessionStorage.getItem('userData');
    return JSON.parse(userData);
  }

  // public async login(postData){
  //   // Login api connection
  //   // const responseData = {
  //   //   "name":'Moises Morales',
  //   //   "id":"1",
  //   //   "token":'asdñflkeofgiagñejgoe'
  //   // };


  //   await sessionStorage.setItem('userData',JSON.stringify(responseData));
  //   return true;
  // }
  login(postData): Observable <any>{
    let params = JSON.stringify(postData);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post("http://localhost:3005/api/signin", params, {headers});
  }



  signup(postData){
    let params=JSON.stringify(postData);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post("http://localhost:3005/api/signup", params, {headers});
  }

  public async logout(){
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }

}
