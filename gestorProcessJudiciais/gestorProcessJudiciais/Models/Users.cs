using System.ComponentModel.DataAnnotations;

namespace gestorProcessJudiciais.Models
{
    public class Users
    {
        public long Id { get; set; }
        public string? Nome { get; set; }
        public string Usuario { get; set; }
        public string Senha { get; set; }
        public long Cargo { get; set; }
    }
}
