import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFilm } from '../models/film';
import { FilmService } from './film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  
  constructor(private filmService:FilmService) { }

  public films:any
  public searchText:any
  public characters = []

  ngOnInit(): void {
    
    this.filmService.getFilms()
    .subscribe(
      data =>{
        this.films = data;
        console.log(data);
      } 
    )
  }


  test(data:any){
      console.log(data)
  }

  load(data:any){
    this.characters = data;
  }

}
