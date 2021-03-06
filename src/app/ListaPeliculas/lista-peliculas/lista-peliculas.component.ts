import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {APIpeliculaService} from "../../apipelicula.service";
import {Pelicula} from "../../pelicula.model";

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.scss']
})
export class ListaPeliculasComponent implements OnInit {

  @Input()
    name

  peliculas: Array<Pelicula>;
  first:boolean=true;
  last:boolean= true;
  prev:string='prev';
  next:string='next';
  page:number=1;
  totalPage:number=0;
  constructor(
    protected Apiservice: APIpeliculaService,
    private activatedRoute: ActivatedRoute,
    private routerc: Router) { }

  ngOnInit(): void {
    this.getPeliculas();
  }
  getPeliculas():void{

    this.Apiservice.getListMovies(this.page)
      .subscribe(data => {
        this.peliculas = new Array<Pelicula>();
        this.totalPage = data['total_page'];
        console.log(data["results"]);
        for (let pel of data["results"]) {
          let peliculaf: Pelicula = new Pelicula;
          peliculaf.nombre = pel["title"];
          console.log(pel["poster_path"])
          peliculaf.imagen = peliculaf.url+pel["poster_path"];
          peliculaf.popularidad= pel["popularity"];
          peliculaf.idiomas= pel["original_language"];
          console.log(peliculaf)
          this.peliculas.push(peliculaf)
        }

        console.log(this.peliculas);
        this.first = this.page === 1;
        this.last = this.page === this.totalPage;



        (error) => {
          console.error(error);
        }});

  }
  goToPersonaje(id: string) {
   /* this.Apiservice.peliculaFetch = id;
    this.routerc.navigate(['/pelicula']);*/
  }
  filtrar(){
  /*
    this.Apiservice.getMovieByTitle(this.name)
      .subscribe(data => {
          console.log(data);
          this.personajes = data['results'];
          console.log(this.personajes);
          this.first= data['info']['prev']===null;
          this.last= data['info']['next']===null;
          this.prev= data['info']['prev'];
          this.next= data['info']['next'];

          console.log(this.personajes)},
        (error) => {
          console.error(error);
        }
      )*/
  }
  consultar(param:string){
    if(param ==="prev"){
      this.page = this.page-1;
    }
    if(param === "next"){
      this.page = this.page+1;
    }
    this.getPeliculas();
   /* console.log('direccion'+url);
    this.Apiservice.getListMovies()
      .subscribe(data => {
          this.personajes = data['results'];
          console.log(this.personajes);
          this.first= data['info']['prev']===null;
          this.last= data['info']['next']===null;
          this.prev= data['info']['prev'];
          this.next= data['info']['next'];

          console.log(this.personajes)},
        (error) => {
          console.error(error);
        }

      )*/
  }
}
