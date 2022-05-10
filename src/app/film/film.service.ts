import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFilm } from '../models/film';


HttpClient
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public mylist = [] 

  private url = "https://swapi.dev/api/films/"
  constructor(private http:HttpClient) { }

  

  getFilms(){
    return this.http.get<any>(this.url)
      .pipe(map(data=> {
        return data['results'];
      }))
  }

 


}
