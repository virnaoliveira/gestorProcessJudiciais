import { Component } from '@angular/core';
import { CaixaSaidaService } from './caixa-saida.service';
import { ActivatedRoute } from '@angular/router';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';

@Component({
  selector: 'app-caixa-saida',
  templateUrl: './caixa-saida.component.html',
  styleUrls: ['./caixa-saida.component.css']
})
export class CaixaSaidaComponent {
  parametro: string = '';
  todosProceJud: ProcessosJudiciais[] = [];

  constructor(
    private caixaSaidaService: CaixaSaidaService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.parametro = params.get('usuario') ?? '';
    });

    this.caixaSaidaService.caixaArqv(this.parametro, 2).subscribe(
      resultado => {
        if (Array.isArray(resultado)) {
          this.todosProceJud = resultado;
        } else {
          this.todosProceJud = [resultado];
        }
      }
    );
  }
}
