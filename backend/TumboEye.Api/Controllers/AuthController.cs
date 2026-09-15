using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TumboEye.Api.DTOs;
using TumboEye.Api.Services;

namespace TumboEye.Api.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new ErrorResponse("Please check your registration details."));
        }

        var (result, error) = await _authService.RegisterAsync(request);
        if (error is not null)
        {
            return Conflict(new ErrorResponse(error));
        }

        return Ok(result);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new ErrorResponse("Please enter a valid email and password."));
        }

        var (result, error) = await _authService.LoginAsync(request);
        if (error is not null)
        {
            return Unauthorized(new ErrorResponse(error));
        }

        return Ok(result);
    }

    [HttpPost("google")]
    public async Task<IActionResult> GoogleSignIn([FromBody] GoogleAuthRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new ErrorResponse("Google sign-in token is required."));
        }

        var (result, error) = await _authService.GoogleSignInAsync(request);
        if (error is not null)
        {
            return Unauthorized(new ErrorResponse(error));
        }

        return Ok(result);
    }

    [Authorize]
    [HttpGet("me")]
    public IActionResult Me()
    {
        var id = User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? User.FindFirstValue("sub")
            ?? string.Empty;
        var email = User.FindFirstValue(ClaimTypes.Email)
            ?? User.FindFirstValue("email")
            ?? string.Empty;
        var name = User.FindFirstValue(ClaimTypes.Name)
            ?? User.Identity?.Name
            ?? email;
        var role = User.FindFirstValue(ClaimTypes.Role) ?? "User";
        var provider = User.FindFirstValue("auth_provider") ?? "Email";

        return Ok(new UserDto(
            Guid.TryParse(id, out var guid) ? guid : Guid.Empty,
            name,
            email,
            null,
            provider,
            role
        ));
    }
}
