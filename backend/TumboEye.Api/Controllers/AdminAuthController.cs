using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TumboEye.Api.DTOs;
using TumboEye.Api.Models;
using TumboEye.Api.Services;

namespace TumboEye.Api.Controllers;

[ApiController]
[Route("api/admin/auth")]
public class AdminAuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AdminAuthController(IAuthService authService)
    {
        _authService = authService;
    }

    /// <summary>Admin-only login. Wrong password or non-admin accounts never get a panel token.</summary>
    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new ErrorResponse("Please enter a valid email and password."));
        }

        var (result, error) = await _authService.LoginAsync(request);
        if (error is not null || result is null)
        {
            return Unauthorized(new ErrorResponse("Invalid email or password."));
        }

        if (!string.Equals(result.User.Role, nameof(UserRole.Admin), StringComparison.OrdinalIgnoreCase))
        {
            return Unauthorized(new ErrorResponse("Invalid email or password."));
        }

        return Ok(result);
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("me")]
    public IActionResult Me()
    {
        var email = User.FindFirstValue(ClaimTypes.Email)
            ?? User.FindFirstValue("email")
            ?? string.Empty;
        var name = User.FindFirstValue(ClaimTypes.Name)
            ?? User.FindFirstValue("name")
            ?? "Admin";
        var role = User.FindFirstValue(ClaimTypes.Role) ?? "Admin";

        return Ok(new
        {
            email,
            fullName = name,
            role
        });
    }
}
