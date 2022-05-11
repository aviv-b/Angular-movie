import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from '../models/people';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<IPeople[]> {
    return this.http.get<IPeople[]>(environment.apiUrl+'/people');
  }

  getById(id: any): Observable<IPeople> {
    return this.http.get<IPeople>(`${environment.apiUrl}/people/${id}`);
  }
  
  getByUrl(url: any): Observable<IPeople> {
    return this.http.get<IPeople>(url);
  }
}
