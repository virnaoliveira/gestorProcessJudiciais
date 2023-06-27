import { Component, OnInit } from '@angular/core';
import { CaixaArquivadosService } from './caixa-arquivados.service';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-caixa-arquivados',
  templateUrl: './caixa-arquivados.component.html',
  styleUrls: ['./caixa-arquivados.component.css']
})
export class CaixaArquivadosComponent implements OnInit {

  parametro: string = '';
  todosProceJud: ProcessosJudiciais[] = [];

  constructor(
    private caixaArquivadosService: CaixaArquivadosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.parametro = params.get('usuario') ?? '';
    });

    this.carregarCaixa(this.parametro,3);
  }

  carregarCaixa(usuario:string,tipo: number): void{
    this.caixaArquivadosService.caixaArqv(usuario, tipo).subscribe(
      resultado => {
        if (Array.isArray(resultado)) {
          this.todosProceJud = resultado;
        } else {
          this.todosProceJud = [resultado];
        }
      }
    );
  }

  Desarquivar(id: number): void {
    this.caixaArquivadosService.ProcessoId(id).subscribe(resultado =>{
      const proces = {
        id : resultado.id,
        nProcesso: resultado.nProcesso,
        nomeDoProcesso: resultado.nomeDoProcesso,
        descricao: resultado.descricao,
        Caixa: 1,
        usuario: resultado.usuario
      };

      const processo: ProcessosJudiciais = proces;

      this.caixaArquivadosService.AtualizrProcesso(processo).subscribe(
        (resultado) => {
          alert('Processo desarquivado com sucesso!');
          window.location.reload();
        },
        (error) => {
          alert('Ocorreu um erro. Por favor, tente novamente.');
        }
      )

    })
  }

}
