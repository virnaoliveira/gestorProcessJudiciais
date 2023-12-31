﻿using gestorProcessJudiciais.Models;

namespace gestorProcessJudiciais.Services
{
    public interface IProcessJudService
    {
        ProcessosJudiciais Create(ProcessosJudiciais processosJudiciais);
        ProcessosJudiciais Update(ProcessosJudiciais processosJudiciais);
        ProcessosJudiciais FindById(long id);
        ProcessosJudiciais FindByNProcess(string nProcesso, string usuario);
        IEnumerable<ProcessosJudiciais> FindByCaixa(string usuario, int caixa);
        List<ProcessosJudiciais> FindAll();
        void Delete(long id);
    }
}
