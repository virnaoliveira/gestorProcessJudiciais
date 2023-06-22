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
    }
}
