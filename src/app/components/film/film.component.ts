import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/models/film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public films?:IFilm[]
  public searchText!:string
  public characterUrl:any
  public currFilmId?:number

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.getAll();
  }

  /**
   * Getting all films 
   */
  getAll(){
    this.filmService.getAll().subscribe({
      next: (data) => {
        this.films = data;
      },
      error: (err) => {
        console.log(err.message)
      }
    }); 
  }

  /** 
   *  Characters click event 
   */
  btnCharacterClick(fid:number, url:any){
    this.characterUrl = url;
    this.currFilmId = fid;
  }
  

}
