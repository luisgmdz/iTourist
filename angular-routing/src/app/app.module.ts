import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//separamos las rutas en un archivo router
import { RouterModule } from '@angular/router';
import { routes } from './app.router';

//debemos importar los modulos
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';

//importamos nuestros servicio y seguridad
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { RestauranteApiService } from './services/restaurante-api.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,AuthGuard,LoginGuard,RestauranteApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
