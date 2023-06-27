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

export class LoginService {

  url = 'https://localhost:7262/Users';

  constructor(private http: HttpClient){}

  verificaUsuario(usuario: string, senha: string): Observable<Users>{
    const apiUrl = `${this.url}/${usuario}/${senha}`;
    return this.http.get<Users>(apiUrl);
  }

  cadastraUsuario(usuario: Users): Observable<any>{
    return this.http.post<Users>(this.url, usuario, httpOptions);
  }

}
