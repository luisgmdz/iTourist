import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.router';
import { IndexRoutes } from './index/index.router';
import { NotFoundRoutes } from './not-found/not-found.router';


export const routes: Routes = [...HomeRoutes,...IndexRoutes,...NotFoundRoutes];
