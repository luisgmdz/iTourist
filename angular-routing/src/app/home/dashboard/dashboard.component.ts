import { Component, OnInit } from '@angular/core';
//necesitamos mostrar datos del usuario
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userInfo : object;

  constructor(
    private _authService: AuthService
  ){ }

  ngOnInit() {
    this._authService.getUserData().then(data=>{
      console.log(data);
      this.userInfo = data;
    });
  }

}
