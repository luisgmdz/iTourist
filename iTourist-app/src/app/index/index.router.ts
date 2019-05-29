import {Route} from '@angular/router';
import { IndexComponent } from './index.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

export const IndexRoutes: Route[]=[
    {
        path: '',
        component: IndexComponent,
        children:[
            {path:'', component:RestaurantesComponent},
            {path:'nosotros', component: NosotrosComponent},
            {path:'perfil', component:PerfilComponent},
        ]},


];