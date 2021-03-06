import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfoPeliculaComponent } from './InfoPelicula/info-pelicula/info-pelicula.component';
import { ListaReservasComponent } from './ListaReservas/lista-reservas/lista-reservas.component';
import {ComponentLoaderFactory} from "ngx-bootstrap/component-loader";
import {PositioningService} from "ngx-bootstrap/positioning";
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";


@NgModule({
  declarations: [
    AppComponent,
    InfoPeliculaComponent,
    ListaReservasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot()
    
    
  ],
  providers: [BsModalService,ComponentLoaderFactory, PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
