import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './restaurantes/dashboard.component';
import { SettingsComponent } from './perfil/settings.component';
import { ProductsComponent } from './perfilrest/products.component';

//tenemos que exportar los modulos que se usen en IndexModule
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RestComponent } from './rest/rest.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent, RestComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ]
})
export class HomeModule { }
