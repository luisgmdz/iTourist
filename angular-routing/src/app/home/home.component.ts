import { Component, OnInit } from '@angular/core';

//necesitamos cerrar sesión
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _authService:AuthService,
    private _router:Router
  ){ }

  ngOnInit() {
  }

  logoutAction(){
    if(this._authService.logout()){
      this._router.navigate(['login']);
    }
  }
}
