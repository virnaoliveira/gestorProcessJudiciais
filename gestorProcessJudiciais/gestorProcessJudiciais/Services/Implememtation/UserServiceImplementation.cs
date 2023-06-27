using gestorProcessJudiciais.Data;
using gestorProcessJudiciais.Models;

namespace gestorProcessJudiciais.Services.Implememtation
{
    public class UserServiceImplementation : IUserService
    {
        private Context _context;
        public UserServiceImplementation(Context context)
        {
            _context = context;
        }
        public Users Create(Users user)
        {
            try
            {
                _context.Add(user);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return user;
        }

        public Users FindUser(string usuario, string senha)
        {
            return _context.Users.SingleOrDefault(p => p.Usuario.Equals(usuario) && p.Senha.Equals(senha));
        }

        public List<Users> FindAll()
        {
            return _context.Users.ToList();
        }

    }
}
