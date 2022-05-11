import { Component, Input, OnInit } from '@angular/core';
import { IPeople } from 'src/app/models/people';
import { PeopleService } from '../../services/people.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() 
  public pepoleUrl?:any 
  
  public people:IPeople ={}
  
  constructor(private peopleService :PeopleService) { }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.getPeople(this.pepoleUrl);
  }
  getPeople(url: any): void {
    this.peopleService.getByUrl(url)
    .subscribe({
      next: (data) => this.people = data,
      error: (err) => console.log(err)
    });
  }


}
