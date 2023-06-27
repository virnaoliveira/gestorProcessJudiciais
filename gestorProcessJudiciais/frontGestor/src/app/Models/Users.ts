export class Users {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    cargo?: number;
  
    constructor() {
      this.id = 0;
      this.nome = '';
      this.usuario = '';
      this.senha = '';
    }
  }
  