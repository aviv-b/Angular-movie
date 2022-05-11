import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IFilm } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<IFilm[]> {
    const url = `${environment.apiUrl}/films`;
    return this.http
      .get<any>(url)
      .pipe( map( data => data['results'] ));
  }

}
