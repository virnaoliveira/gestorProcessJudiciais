import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }) 
};

@Injectable({
  providedIn: 'root'
})
export class ProcessosJudiciaisService {

  url = 'https://localhost:7262/ProcessJud';

  constructor(private http: HttpClient) { }

  todosProcessos(): Observable<ProcessosJudiciais[]>{
    return this.http.get<ProcessosJudiciais[]>(this.url);
  }

  excluirProcesso(id:number): Observable<any>{
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }

}
