import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./Login/login/login.component";
import {InfoPeliculaComponent} from "./InfoPelicula/info-pelicula/info-pelicula.component";
import {RegistroComponent} from "./Registro/registro/registro.component";
import {ListaPeliculasComponent} from "./ListaPeliculas/lista-peliculas/lista-peliculas.component";

const routes: Routes = [
 /* { path: '', component: ListaPersonajesComponent},*/
  { path: 'login', component: LoginComponent},
  { path: 'pelicula/:id', component: InfoPeliculaComponent},
  //{ path: 'favoritos', component: FavoritosComponent},
  { path: 'listaPeliculas', component: ListaPeliculasComponent},
  //{ path: 'signin', component: SignInComponent},
  { path: 'registrar', component: RegistroComponent},


];


@NgModule({
  declarations: [],
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
