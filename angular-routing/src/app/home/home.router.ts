import { HomeComponent } from './home.component';
import { DashboardComponent } from './restaurantes/dashboard.component';
import { ProductsComponent } from './perfilrest/products.component';
import { SettingsComponent } from './perfil/settings.component';

import { Route } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';

export const HomeRoutes: Route[]=[
  { path:"",
    component: HomeComponent,
    canActivate:[AuthGuard],
    children:[
        { path:"", component: DashboardComponent },
        { path:"perfil", component: SettingsComponent },
        {path: "restaurant/:id", component: ProductsComponent }
    ]
  }
];
