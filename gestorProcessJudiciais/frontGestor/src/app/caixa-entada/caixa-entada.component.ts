import { Component, TemplateRef } from '@angular/core';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';
import { CaixaEntadaService } from './caixa-entada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Users } from '../Models/Users';

@Component({
  selector: 'app-caixa-entada',
  templateUrl: './caixa-entada.component.html',
  styleUrls: ['./caixa-entada.component.css']
})
export class CaixaEntadaComponent {

  parametro: string = '';
  todosProceJud: ProcessosJudiciais[] = [];
  modalRef?: BsModalRef;
  numeroProcess: string = '';
  todoUser: Users[] = [];
  selectedUser: string = '';
  
  constructor(
    private caixaEntradaService: CaixaEntadaService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>, numProcess: string) {
    this.modalRef = this.modalService.show(template);
    this.numeroProcess = numProcess;
  }

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

    this.caixaEntradaService.todosUsers().subscribe( resultado => {
      this.todoUser = resultado
    })

  }

  arquivar(id: number): void {
    this.caixaEntradaService.ProcessoId(id).subscribe(resultado =>{
      const proces = {
        id : resultado.id,
        nProcesso: resultado.nProcesso,
        nomeDoProcesso: resultado.nomeDoProcesso,
        descricao: resultado.descricao,
        caixa: 3,
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

  Tramitar(): void {
    const novoUsuario = this.selectedUser;
    console.log(this.numeroProcess,this.parametro,novoUsuario);

    this.caixaEntradaService.ProcessoNum(this.numeroProcess,this.parametro).subscribe(resultado =>{       
      const nomeProcesso = resultado.nomeDoProcesso;
      const desc = resultado.descricao;
      if(resultado.caixa==1){
        const proces = {
          id : resultado.id,
          nProcesso: resultado.nProcesso,
          nomeDoProcesso: resultado.nomeDoProcesso,
          descricao: resultado.descricao,
          caixa: 2,
          usuario: resultado.usuario
        };
        const processo: ProcessosJudiciais = proces;
        this.caixaEntradaService.AtualizrProcesso(processo)
          .subscribe((resultado) => {})
      } else {
        const proces = {
          id : resultado.id,
          nProcesso: resultado.nProcesso,
          nomeDoProcesso: resultado.nomeDoProcesso,
          descricao: resultado.descricao,
          caixa: 1,
          usuario: resultado.usuario
        };
        const processo: ProcessosJudiciais = proces;
        this.caixaEntradaService.AtualizrProcesso(processo)
          .subscribe((resultado) => {})
      }

      const proces = {
        id : 0,
        nProcesso: this.numeroProcess,
        nomeDoProcesso: nomeProcesso,
        descricao: desc,
        caixa: 1,
        usuario: novoUsuario
      };

      this.caixaEntradaService.CadastrarProcesso(proces).subscribe(
        (resultado) => {
          this.modalRef?.hide();
          alert('Processo tramitado com sucesso!');
          this.caixaEntradaService.caixaArqv(this.parametro, 1).subscribe(
            resultado => {
              if (Array.isArray(resultado)) {
                this.todosProceJud = resultado;
              } else {
                this.todosProceJud = [resultado];
              }
            }
          ); 
        },
        (error) => {
          alert('Ocorreu um erro. Por favor, tente novamente.');
        }
      )

    })
    
  }

}
