import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';

import { Route } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';

export const HomeRoutes: Route[]=[
  { path:"",
    component: HomeComponent,
    canActivate:[AuthGuard],
    children:[
        { path:"", component: DashboardComponent },
        { path:"restaurantes", component: ProductsComponent },
        { path:"perfil", component: SettingsComponent },
    ]
  }
];
