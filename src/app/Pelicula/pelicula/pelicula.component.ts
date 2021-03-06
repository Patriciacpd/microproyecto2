import {Component, Input, OnInit} from '@angular/core';
import {Pelicula} from "../../pelicula.model";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  constructor() { }

  titulo:string;
  url:string;
  idiomas: string;
  popularidad: string;
  @Input()
  pelicula:Pelicula;

  ngOnInit(): void {
    console.log(this.pelicula)
    this.titulo = this.pelicula.nombre;
    this.url = this.pelicula.imagen;
    this.idiomas= this.pelicula.idiomas;
    this.popularidad = this.pelicula.popularidad;
  }

}
