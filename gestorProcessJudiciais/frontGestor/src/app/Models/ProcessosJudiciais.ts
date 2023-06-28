export class ProcessosJudiciais {
    id: number;
    nProcesso: string;
    nomeDoProcesso: string;
    descricao: string;
    caixa: number;
    usuario: string;
  
    constructor() {
      this.id = 0;
      this.nProcesso = '';
      this.nomeDoProcesso = '';
      this.descricao = '';
      this.caixa = 0;
      this.usuario = '';
    }
  }
  