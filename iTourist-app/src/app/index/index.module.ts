import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NosotrosComponent, PerfilComponent, RestaurantesComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class IndexModule { }
