import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import {routes} from './app.router'
import { LoginModule } from './login/login.module';
import { IndexModule } from './index/index.module';
import { NoPageComponent } from './no-page/no-page.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    IndexModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
