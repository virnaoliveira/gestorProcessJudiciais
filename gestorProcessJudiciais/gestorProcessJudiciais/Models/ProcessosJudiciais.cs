namespace gestorProcessJudiciais.Models
{
    public class ProcessosJudiciais
    {
        public long Id { get; set; }
        public string NomeDoProcesso { get; set; }
        public string Descricao { get; set; }
        public int Alocacao { get; set; }
        public string Usuario { get; set; }
    }
}
