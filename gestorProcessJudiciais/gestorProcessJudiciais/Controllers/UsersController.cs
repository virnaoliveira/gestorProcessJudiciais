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

        [HttpGet("users/{id}")]
        public IActionResult Get(long id)
        {
            var user = _userService.FindById(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

    }
}
