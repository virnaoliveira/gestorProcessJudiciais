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

        [HttpGet("process/{alocacao}")]
        public IActionResult Get(int alocacao)
        {
            var local = _processJudService.FindByLocal(alocacao);
            if (local == null) return NotFound();
            return Ok(local);
        }

        [HttpPost("processosJudiciais")]
        public IActionResult Post([FromBody] ProcessosJudiciais processosJudiciais)
        {
            if (processosJudiciais == null) return BadRequest();
            return Ok(_processJudService.Create(processosJudiciais));
        }

        [HttpPut("ProcessJud")]
        public IActionResult Put([FromBody] ProcessosJudiciais processosJudiciais)
        {
            if (processosJudiciais == null) return BadRequest();
            return Ok(_processJudService.Update(processosJudiciais));
        }

        [HttpDelete("ProcessJud")]
        public IActionResult Delete(long id)
        {
            _processJudService.Delete(id);
            return NoContent();
        }
    }
}
