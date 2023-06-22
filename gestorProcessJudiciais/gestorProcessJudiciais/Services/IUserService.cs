using gestorProcessJudiciais.Models;

namespace gestorProcessJudiciais.Services
{
    public interface IUserService
    {
        Users Create(Users user);
        Users FindById(long id);
    }
}
