//import { HomeComponent } from './home/home.component';
//import { IndexComponent } from './index/index.component';
//import { NotFoundComponent } from './not-found/not-found.component';

import { NgModule } from '@angular/core';
import { /*Routes,*/ RouterModule } from '@angular/router';

//const routes: Routes = [
  //{ path:"",component: HomeComponent },
  //{ path:"index",component: IndexComponent },
  //{ path:"**", component: NotFoundComponent }
//];

@NgModule({
  imports: [RouterModule.forRoot([/*routes*/])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
