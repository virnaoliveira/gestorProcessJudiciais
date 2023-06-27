import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProcessosJudiciaisComponent } from './processos-judiciais/processos-judiciais.component';
import { CadProcessosComponent } from './cad-processos/cad-processos.component';
import { CaixaEntadaComponent } from './caixa-entada/caixa-entada.component';
import { CaixaSaidaComponent } from './caixa-saida/caixa-saida.component';
import { CaixaArquivadosComponent } from './caixa-arquivados/caixa-arquivados.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'processos/:usuario', component: ProcessosJudiciaisComponent},
  { path: 'cadProcessos/:usuario/:idProcess', component: CadProcessosComponent},
  { path: 'caixaEntrada/:usuario', component: CaixaEntadaComponent},
  { path: 'caixaSaida/:usuario', component: CaixaSaidaComponent},
  { path: 'caixaArquivados/:usuario', component: CaixaArquivadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
