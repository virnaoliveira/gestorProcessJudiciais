import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }) 
};

@Injectable({
  providedIn: 'root'
})
export class CadProcessosService {

  url = 'https://localhost:7262/ProcessJud';

  constructor(private http: HttpClient) { }

  CadastrarProcesso(ProcesJud: ProcessosJudiciais) : Observable<any>{
    return this.http.post<ProcessosJudiciais>(this.url,ProcesJud,httpOptions);
  }

  AtualizrProcesso(ProcesJud: ProcessosJudiciais) : Observable<any>{
    const apiUrl = `${this.url}/${ProcesJud.id}`;
    return this.http.put<ProcessosJudiciais>(apiUrl,ProcesJud,httpOptions);
  }

  ProcessoId(id: number): Observable<ProcessosJudiciais>{
    const apiUrl = `${this.url}/${id}`;
    return this.http.get<ProcessosJudiciais>(apiUrl);
  }

}
