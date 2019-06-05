import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public nombre_local;
  public correo_local;
  public idioma_local;
  public apellido_local;
  
  public usuario_local;

  constructor() { }

  ngOnInit() {

    this.nombre_local = JSON.parse(sessionStorage.getItem("usuario")).nombre;
    this.apellido_local = JSON.parse(sessionStorage.getItem("usuario")).apellido;
    this.correo_local = JSON.parse(sessionStorage.getItem("usuario")).email;
    this.idioma_local = JSON.parse(sessionStorage.getItem("usuario")).idioma;
  }

}
