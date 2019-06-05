import { HomeComponent } from './home.component';
import { DashboardComponent } from './restaurantes/dashboard.component';
import { ProductsComponent } from './perfilrest/products.component';
import { SettingsComponent } from './perfil/settings.component';

import { Route } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { InglesComponent } from './ingles/ingles.component';
import { FrancesComponent } from './frances/frances.component';
import { AlemanComponent } from './aleman/aleman.component';

export const HomeRoutes: Route[]=[
  { path:"",
    component: HomeComponent,
    canActivate:[AuthGuard],
    children:[
        { path:"", component: DashboardComponent },
        { path:"perfil", component: SettingsComponent },
        { path: "restaurant/:id", component: ProductsComponent },
        { path: "ingles", component: InglesComponent },
        { path: "frances", component: FrancesComponent },
        { path: "aleman", component: AlemanComponent }
    ]
  }
];
