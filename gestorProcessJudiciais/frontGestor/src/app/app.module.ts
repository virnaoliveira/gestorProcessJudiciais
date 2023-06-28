import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';
import { ProcessosJudiciaisComponent } from './processos-judiciais/processos-judiciais.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CadProcessosComponent } from './cad-processos/cad-processos.component';
import { CaixaEntadaComponent } from './caixa-entada/caixa-entada.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CaixaSaidaComponent } from './caixa-saida/caixa-saida.component';
import { CaixaArquivadosComponent } from './caixa-arquivados/caixa-arquivados.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProcessosJudiciaisComponent,
    CadProcessosComponent,
    CaixaEntadaComponent,
    CaixaSaidaComponent,
    CaixaArquivadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    FormsModule
  ],
  providers: [HttpClientModule, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
