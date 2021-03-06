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

  constructor(protected apiPelicula: APIpeliculaService) { }

  ngOnInit(): void {
    this.apiPelicula.getMovieDetail("550")
    .subscribe(data=>{
      console.log(data)
      this.title=data["title"];
      console.log(this.title);
      this.language=data["original_language"];
      console.log(this.language);
    })


  }

}
