import { NotFoundComponent } from './not-found.component';

import { Route } from '@angular/router';

export const NotFoundRoutes: Route[]=[
  {
    path:"**",component: NotFoundComponent
  }
];
