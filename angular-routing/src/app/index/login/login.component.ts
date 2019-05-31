import { Component, OnInit } from '@angular/core';
//es necesario el servicio de autenticación
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { log } from 'util';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public token;
  public status;

  public postData = {
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

  loginAction(){
      //API actions and local storage
    //   if(this._authSerive.login(this.postData)){
    //     this._router.navigate(['']);
    //   }else{

    //   }
    // }else{
    //   this.errorText = 'Por favor, dame datos validos!'
    // }
    this._authService.login(this.postData)
    .subscribe(
      response =>{
        this.token = response.token;
        if(this.token.lenght<=0){
          this.status="error";
        }else{
          this.status="success";
          sessionStorage.setItem("token", this.token);
         // console.log(this.token);
          this._router.navigate(['']);
        }

      },
      error=>{
        let MsnError=<any>error;
        if(MsnError!=null){
          this.status="error";
        }
      }
    );
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
