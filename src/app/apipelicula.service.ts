import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class APIpeliculaService {

  constructor(protected http:HttpClient) { }

  apiKey= "?api_key=840fda7ee6e97d936d368f8a20db8877"
  apiURL= "https://api.themoviedb.org/3/"

  getMovieDetail(id:string){ 
    return this.http.get(this.apiURL+"movie/"+id+this.apiKey);
  }

  getMovieByTitle(title:string){
    return this.http.get(this.apiURL+"search/movie"+this.apiKey+"&query="+title);
  }



  getListMovies(){ 
    return this.http.get(this.apiURL+"discover/movie"+this.apiKey);
  }

  

}
