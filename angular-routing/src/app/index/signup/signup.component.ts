import { Component, OnInit } from '@angular/core';
//es necesario el servicio de autenticación
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { log } from 'util';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public status;

  public postData = {
    'nombre':'',
    'apellido':'',
    'idioma':'',
    'email':'',
    'password':''
  }
  public errorText:string;

  constructor(
    private _authService:AuthService,
    private _router: Router
  ){
    this.errorText = '';
  }

  ngOnInit() {
  }

  registerAction(){
    this._authService.signup(this.postData)
    .subscribe(
      response =>{
        
          this.status="success";
         // console.log(this.token);
         alert("Te has registrado correctamente");
          this._router.navigate(['']);
        

      },
      error=>{
        let MsnError=<any>error;
        if(MsnError!=null){
          this.status="error";
        }
      }
    );
  }

}
