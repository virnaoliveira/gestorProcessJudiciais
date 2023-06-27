import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Users } from '../Models/Users';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: any;
  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private loginService: LoginService,
    private router: Router
  ) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void{
     this.formulario = new FormGroup({
        usuario: new FormControl(null),
        senha: new FormControl(null),
        nome: new FormControl(null),
        cargo: new FormControl(null)
     });
  }

  logar(): void{
    const usuario = this.formulario.get('usuario').value;
    const senha = this.formulario.get('senha').value;

    this.loginService.verificaUsuario(usuario, senha)
    .subscribe(
      (resultado) => {
        
        if (window.confirm('Login realizado com sucesso!')) {
          this.modalRef?.hide();
        }
        this.router.navigate(['/caixaEntrada',resultado.usuario]); 
      },
      (error) => {
        if (error.status === 404) {
          alert('Usuário ou senha incorretos.');
          this.formulario.reset();
        } else {
          alert('Ocorreu um erro. Por favor, tente novamente.');
          this.formulario.reset();
        }
      }
    );
  }

  cadastrar(): void{
    const usuario: Users = this.formulario.value;
    this.loginService.cadastraUsuario(usuario).subscribe(
      (resultado) => {
        if (window.confirm('Usuário cadastrado com sucesso!')) {
          this.modalRef?.hide();
        }
        this.formulario.reset();
      },
      (error) => {
        alert('Ocorreu um erro. Por favor, tente novamente.');
        this.formulario.reset();
      }
    )
  }

}
