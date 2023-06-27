import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }) 
};

@Injectable({
  providedIn: 'root'
})
export class CaixaEntadaService {

  url = 'https://localhost:7262/ProcessJud';

  constructor(private http: HttpClient) { }

  caixaArqv(usuario: string, caixa: number): Observable<ProcessosJudiciais>{
    const apiUrl = `${this.url}/${usuario}/${caixa}`;
    return this.http.get<ProcessosJudiciais>(apiUrl);
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

