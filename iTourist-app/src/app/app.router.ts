import {Routes} from '@angular/router';
import { IndexRoutes } from './index/index.router';
import { LoginRoutes } from './login/login.router';
import { NoPageRoutes } from './no-page/no-page.router';

export const routes: Routes = [...IndexRoutes,
                             ...LoginRoutes, 
                             ...NoPageRoutes,
                            ];