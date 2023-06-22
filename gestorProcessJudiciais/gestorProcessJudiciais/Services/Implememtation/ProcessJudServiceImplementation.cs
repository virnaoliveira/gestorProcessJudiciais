using gestorProcessJudiciais.Data;
using gestorProcessJudiciais.Models;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace gestorProcessJudiciais.Services.Implememtation
{
    public class ProcessJudServiceImplementation : IProcessJudService
    {
        private Context _context;
        public ProcessJudServiceImplementation(Context context)
        {
            _context = context;
        }

        public ProcessosJudiciais FindByLocal(int alocacao)
        {
            return _context.ProcessosJudiciais.SingleOrDefault(p => p.Alocacao.Equals(alocacao));
        }

        public ProcessosJudiciais Create(ProcessosJudiciais processosJudiciais)
        {
            try
            {
                _context.Add(processosJudiciais);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
            return processosJudiciais;
        }

        public ProcessosJudiciais Update(ProcessosJudiciais processosJudiciais)
        {
            if (!Exists(processosJudiciais.Id)) return new ProcessosJudiciais();
            var result = _context.ProcessosJudiciais.SingleOrDefault(p => p.Id.Equals(processosJudiciais.Id));
            if(result != null)
            {
                try
                {
                    _context.Entry(result).CurrentValues.SetValues(processosJudiciais);
                    _context.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }             
            }     
            return processosJudiciais;
        }

        private bool Exists(long id)
        {
            return _context.ProcessosJudiciais.Any(p => p.Id.Equals(id));
        }

        public void Delete(long id)
        {
            var result = _context.ProcessosJudiciais.SingleOrDefault(p => p.Id.Equals(id));
            if (result != null)
            {
                try
                {
                    _context.ProcessosJudiciais.Remove(result);
                    _context.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
    }
}
