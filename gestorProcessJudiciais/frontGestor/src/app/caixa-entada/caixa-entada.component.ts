import { Component } from '@angular/core';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';
import { CaixaEntadaService } from './caixa-entada.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-caixa-entada',
  templateUrl: './caixa-entada.component.html',
  styleUrls: ['./caixa-entada.component.css']
})
export class CaixaEntadaComponent {

  parametro: string = '';
  todosProceJud: ProcessosJudiciais[] = [];
  
  constructor(
    private caixaEntradaService: CaixaEntadaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.parametro = params.get('usuario') ?? '';  
    });

    this.caixaEntradaService.caixaArqv(this.parametro, 1).subscribe(
      resultado => {
        if (Array.isArray(resultado)) {
          this.todosProceJud = resultado;
        } else {
          this.todosProceJud = [resultado];
        }
      }
    );
  }

  arquivar(id: number): void {
    this.caixaEntradaService.ProcessoId(id).subscribe(resultado =>{
      const proces = {
        id : resultado.id,
        nProcesso: resultado.nProcesso,
        nomeDoProcesso: resultado.nomeDoProcesso,
        descricao: resultado.descricao,
        Caixa: 3,
        usuario: resultado.usuario
      };
      const processo: ProcessosJudiciais = proces;
      this.caixaEntradaService.AtualizrProcesso(processo).subscribe(
        (resultado) => {
          alert('Processo arquivado com sucesso!');
          window.location.reload(); 
        },
        (error) => {
          alert('Ocorreu um erro. Por favor, tente novamente.');
        }
      )

    })
  }


}
