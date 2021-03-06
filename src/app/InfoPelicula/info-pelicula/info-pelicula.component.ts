import { Component, OnInit } from '@angular/core';
import { APIpeliculaService} from "../../apipelicula.service"



@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styleUrls: ['./info-pelicula.component.scss']
})
export class InfoPeliculaComponent implements OnInit {
  title: string="";
  language: string="";
  overview: string = "";
  popularity: string="";
  production_companies: string="";
  budget: string="";
  genres: string="";
  status: string="";
  release_date: string="";
  backdrop_path: string="";
  

  constructor(protected apiPelicula: APIpeliculaService) { }

  ngOnInit(): void {
    this.apiPelicula.getMovieDetail("550")
    .subscribe(data=>{
      this.title=data["title"];
      this.language=data["original_language"];
      this.overview=data["overview"];
      this.popularity=data["popularity"];
      this.production_companies=data["production_companie"];
      this.budget=data["budget"];
      this.genres=data["genres"];
      this.status=data["status"];
      this.release_date=data["release_date"];
      this.backdrop_path=data["backdrop_path"];


    })


  }

}


