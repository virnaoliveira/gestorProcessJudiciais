import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadProcessosService } from './cad-processos.service';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';

@Component({
  selector: 'app-cad-processos',
  templateUrl: './cad-processos.component.html',
  styleUrls: ['./cad-processos.component.css']
})
export class CadProcessosComponent implements OnInit {

  usuario: string = '';
  idProcess: string = '';
  formulario!: FormGroup;
  botao: string = '';

  constructor(
    private route: ActivatedRoute,
    private cadProcesService: CadProcessosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuario = params.get('usuario') ?? '';
      this.idProcess = params.get('idProcess') ?? '';
      this.botao = "Cadastrar";

      this.cadProcesService.ProcessoId(+this.idProcess).subscribe(resultado => {
        this.formulario.patchValue({
          nProcesso: resultado.nProcesso,
          nomeDoProcesso: resultado.nomeDoProcesso,
          descricao: resultado.descricao
        });
        this.botao = "Atualizar";
      });
    });

    this.formulario = new FormGroup({
      nProcesso: new FormControl(null),
      nomeDoProcesso: new FormControl(null),
      descricao: new FormControl(null)
    });
  }

  enviarForms(): void {
    if (this.idProcess === "0") {
      const processo: ProcessosJudiciais = {
        id: 0,
        nProcesso: this.formulario.value.nProcesso,
        nomeDoProcesso: this.formulario.value.nomeDoProcesso,
        descricao: this.formulario.value.descricao,
        caixa: 1,
        usuario: this.usuario
      };

      this.cadProcesService.CadastrarProcesso(processo).subscribe(
        (resultado) => {
          alert('Processo cadastrado com sucesso!');
          this.router.navigate(['/processos', resultado.usuario]);
        },
        (error) => {
          alert('Ocorreu um erro. Por favor, tente novamente.');
          this.formulario.reset();
        }
      );
    } else {
      const processId = +this.idProcess;
      this.cadProcesService.ProcessoId(processId).subscribe(resultado => {
        const processo: ProcessosJudiciais = {
          id: resultado.id,
          nProcesso: this.formulario.value.nProcesso,
          nomeDoProcesso: this.formulario.value.nomeDoProcesso,
          descricao: this.formulario.value.descricao,
          caixa: resultado.caixa,
          usuario: resultado.usuario
        };

        this.cadProcesService.AtualizrProcesso(processo).subscribe(
          (resultado) => {
            alert('Processo atualizado com sucesso!');
            this.router.navigate(['/processos', resultado.usuario]);
          },
          (error) => {
            alert('Ocorreu um erro. Por favor, tente novamente.');
            this.formulario.reset();
          }
        );
      });
    }
  }
}
