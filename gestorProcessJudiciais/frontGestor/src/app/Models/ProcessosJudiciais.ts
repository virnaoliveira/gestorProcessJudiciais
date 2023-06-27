export class ProcessosJudiciais {
    id: number;
    nProcesso: string;
    nomeDoProcesso: string;
    descricao: string;
    Caixa: number;
    usuario: string;
  
    constructor() {
      this.id = 0;
      this.nProcesso = '';
      this.nomeDoProcesso = '';
      this.descricao = '';
      this.Caixa = 0;
      this.usuario = '';
    }
  }
  