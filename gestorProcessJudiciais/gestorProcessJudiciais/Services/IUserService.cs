using gestorProcessJudiciais.Models;

namespace gestorProcessJudiciais.Services
{
    public interface IUserService
    {
        Users Create(Users user);
        Users FindUser(string Usuario, string Senha);
        List<Users> FindAll();
        Users FindById(string usuario);
    }
}
