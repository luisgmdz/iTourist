import {Route} from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthComponent } from './auth/auth.component';

export const LoginRoutes: Route[]=[
    {
        path: '',
        component: LoginComponent,
        children:[
            {path:'', component: AuthComponent},
        ]
    }
];