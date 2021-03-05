import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoPeliculaComponent } from './InfoPelicula/info-pelicula/info-pelicula.component';
import { ListaReservasComponent } from './ListaReservas/lista-reservas/lista-reservas.component';

import { LoginComponent } from './Login/login/login.component';
import { CrearReservaComponent } from './crearReserva/crear-reserva/crear-reserva.component';
import { RegistroComponent } from './Registro/registro/registro.component';

import {ButtonsModule} from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    CrearReservaComponent,
    RegistroComponent,

    InfoPeliculaComponent,
    ListaReservasComponent

  ],
  imports: [
    BrowserModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
