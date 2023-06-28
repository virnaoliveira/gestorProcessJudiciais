import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Models/Users';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }) 
};

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  url = 'https://localhost:7262/users';

  constructor(private http: HttpClient) { }

  cargoUsuario(usuario: string): Observable<Users>{
    const apiUrl = `${this.url}/${usuario}`;
    return this.http.get<Users>(apiUrl);
  }
}
