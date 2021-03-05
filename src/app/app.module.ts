import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfoPeliculaComponent } from './InfoPelicula/info-pelicula/info-pelicula.component';
import { ListaReservasComponent } from './ListaReservas/lista-reservas/lista-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPeliculaComponent,
    ListaReservasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
