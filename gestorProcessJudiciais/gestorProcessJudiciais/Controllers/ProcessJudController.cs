using gestorProcessJudiciais.Models;
using gestorProcessJudiciais.Services;
using Microsoft.AspNetCore.Mvc;

namespace gestorProcessJudiciais.Controllers
{
    public class ProcessJudController : ControllerBase
    {
        private readonly ILogger<ProcessJudController> _logger;
        private IProcessJudService _processJudService;

        public ProcessJudController(ILogger<ProcessJudController> logger, IProcessJudService processJudService)
        {
            _logger = logger;
            _processJudService = processJudService;
        }

        [HttpGet("ProcessJud")]
        public IActionResult Get()
        { 
            return Ok(_processJudService.FindAll());
        }

        [HttpGet("ProcessJud/{id}")]
        public IActionResult Get(long id)
        {
            var processo = _processJudService.FindById(id);
            if (processo == null) return NotFound();
            return Ok(processo);
        }

        [HttpGet("ProcessJud/nProcesso/{nProcesso}/{usuario}")]
        public IActionResult Get(string nProcesso, string usuario)
        {
            var processo = _processJudService.FindByNProcess(nProcesso, usuario);
            if (processo == null) return NotFound();
            return Ok(processo);
        }

        [HttpGet("ProcessJud/{usuario}/{caixa}")]
        public IActionResult Get(string usuario, int caixa)
        {
            var caixas = _processJudService.FindByCaixa(usuario, caixa);
            if (caixas == null) return NotFound();
            return Ok(caixas);
        }

        [HttpPost("ProcessJud")]
        public IActionResult Post([FromBody] ProcessosJudiciais processosJudiciais)
        {
            if (processosJudiciais == null) return BadRequest();
            return Ok(_processJudService.Create(processosJudiciais));
        }

        [HttpPut("ProcessJud/{id}")]
        public IActionResult Put([FromBody] ProcessosJudiciais processosJudiciais)
        {
            if (processosJudiciais == null) return BadRequest();
            return Ok(_processJudService.Update(processosJudiciais));
        }

        [HttpDelete("ProcessJud/{id}")]
        public IActionResult Delete(long id)
        {
            _processJudService.Delete(id);
            return NoContent();
        }
    }
}
