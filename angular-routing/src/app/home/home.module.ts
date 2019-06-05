import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './restaurantes/dashboard.component';
import { SettingsComponent } from './perfil/settings.component';
import { ProductsComponent } from './perfilrest/products.component';

//tenemos que exportar los modulos que se usen en IndexModule
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { InglesComponent } from './ingles/ingles.component';
import { FrancesComponent } from './frances/frances.component';
import { AlemanComponent } from './aleman/aleman.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent, InglesComponent, FrancesComponent, AlemanComponent],
  imports: [
    CommonModule, FormsModule, RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEAS9L6v5iaHc1Ru9i_cAeSyKkji4oyVk'
    })
  ]
})
export class HomeModule { }
