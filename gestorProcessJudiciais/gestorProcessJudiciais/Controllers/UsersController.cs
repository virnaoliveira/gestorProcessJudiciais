using gestorProcessJudiciais.Models;
using gestorProcessJudiciais.Services;
using Microsoft.AspNetCore.Mvc;

namespace gestorProcessJudiciais.Controllers
{
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private IUserService _userService;

        public UsersController(ILogger<UsersController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost("users")]
        public IActionResult Post([FromBody] Users user)
        {
            if (user == null) return BadRequest();
            return Ok(_userService.Create(user));
        }

        [HttpGet("users/{usuario}/{senha}")]
        public IActionResult Get(string usuario, string senha)
        {
            var user = _userService.FindUser(usuario, senha);
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpGet("users")]
        public IActionResult Get()
        {
            return Ok(_userService.FindAll());
        }

    }
}
