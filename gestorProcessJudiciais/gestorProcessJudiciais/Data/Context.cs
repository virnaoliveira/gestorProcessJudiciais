using Microsoft.EntityFrameworkCore;
using gestorProcessJudiciais.Models;

namespace gestorProcessJudiciais.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        public DbSet<Users> Users { get; set; }
        public DbSet<ProcessosJudiciais> ProcessosJudiciais { get; set; }
        public DbSet<Caixas> Caixas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Caixas>().HasData(
                new Caixas { Id = 1, Nome = "Entrada" },
                new Caixas { Id = 2, Nome = "Saída" },
                new Caixas { Id = 3, Nome = "Arquivados" }
            );
        }

    }
}
