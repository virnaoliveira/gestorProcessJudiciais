using gestorProcessJudiciais.Models;

namespace gestorProcessJudiciais.Services
{
    public interface IProcessJudService
    {
        ProcessosJudiciais Create(ProcessosJudiciais processosJudiciais);
        ProcessosJudiciais Update(ProcessosJudiciais processosJudiciais);
        ProcessosJudiciais FindByLocal(int Alocacao);
        void Delete(long id);
    }
}
