import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoPeliculaComponent } from './InfoPelicula/info-pelicula/info-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPeliculaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
