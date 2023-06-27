import { Component, TemplateRef } from '@angular/core';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';
import { ProcessosJudiciaisService } from './processos-judiciais.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-processos-judiciais',
  templateUrl: './processos-judiciais.component.html',
  styleUrls: ['./processos-judiciais.component.css']
})
export class ProcessosJudiciaisComponent {

  parametro: string = '';
  todosProceJud : ProcessosJudiciais[] = [];
  modalRef?: BsModalRef;
  processoId: number = 0;

  constructor(
    private procesJudService: ProcessosJudiciaisService,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.parametro = params.get('usuario') ?? '';
    });

    this.procesJudService.todosProcessos().subscribe(resultado => {
      this.todosProceJud = resultado
    })

  }

  exibirConfirmacao(id: number, template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.processoId = id;
  }

  excluir(processoId: number): void{
    this.procesJudService.excluirProcesso(processoId).subscribe(resultado =>{
      this.modalRef?.hide();
      alert("Processo excluído!")
      this.procesJudService.todosProcessos().subscribe(registros => {
        this.todosProceJud = registros;
      })
    })
  }

}
