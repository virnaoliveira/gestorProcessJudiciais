import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CadProcessosService } from './cad-processos.service';
import { Router } from '@angular/router';
import { ProcessosJudiciais } from '../Models/ProcessosJudiciais';

@Component({
  selector: 'app-cad-processos',
  templateUrl: './cad-processos.component.html',
  styleUrls: ['./cad-processos.component.css']
})
export class CadProcessosComponent {

  usuario: string = '';
  idProcess: string = '';
  formulario: any;

  constructor(
    private route: ActivatedRoute,
    private cadProcesService : CadProcessosService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuario = params.get('usuario') ?? '';
      this.idProcess = params.get('idProcess') ?? '';
    });

    this.formulario = new FormGroup({
      nProcesso: new FormControl(null),
      nomeDoProcesso: new FormControl(null),
      descricao: new FormControl(null),
    })

  }

  enviarForms(): void {
    console.log(this.usuario);
    if(this.idProcess=="0"){
      const processo = {
        id : 0,
        nProcesso: this.formulario.get('nProcesso').value,
        nomeDoProcesso: this.formulario.get('nomeDoProcesso').value,
        descricao: this.formulario.get('descricao').value,
        Caixa: 1,
        usuario: this.usuario
      };

      this.cadProcesService.CadastrarProcesso(processo).subscribe(
        (resultado) => {
          alert('Processo cadastrado com sucesso!');
          this.router.navigate(['/processos',resultado.usuario]); 
        },
        (error) => {
          alert('Ocorreu um erro. Por favor, tente novamente.');
          this.formulario.reset();
        }
      )
    } else {
      const Process = +this.idProcess;
      this.cadProcesService.ProcessoId(Process).subscribe(resultado =>{

        const proces = {
          id : resultado.id,
          nProcesso: this.formulario.get('nProcesso').value,
          nomeDoProcesso: this.formulario.get('nomeDoProcesso').value,
          descricao: this.formulario.get('descricao').value,
          Caixa: resultado.Caixa,
          usuario: resultado.usuario
        };

        const processo: ProcessosJudiciais = proces;

        this.cadProcesService.AtualizrProcesso(processo).subscribe(
          (resultado) => {
            alert('Processo atualizado com sucesso!');
            this.router.navigate(['/processos',resultado.usuario]); 
          },
          (error) => {
            alert('Ocorreu um erro. Por favor, tente novamente.');
            this.formulario.reset();
          }
        )
      })
    }
  }

}
