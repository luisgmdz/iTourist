import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
//importamos nuestro servicio de autenticación
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router : Router
  ){}

  canActivate():boolean{
    if(!this._authService.isAuthenticated()){
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }

}
