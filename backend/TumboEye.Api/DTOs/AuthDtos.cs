using System.ComponentModel.DataAnnotations;

namespace TumboEye.Api.DTOs;

public record RegisterRequest(
    [Required, MaxLength(200)] string FullName,
    [Required, EmailAddress, MaxLength(320)] string Email,
    [MaxLength(30)] string? Phone,
    [Required, MinLength(8), MaxLength(128)] string Password,
    [Required] string ConfirmPassword
);

public record LoginRequest(
    [Required, EmailAddress] string Email,
    [Required] string Password
);

public record GoogleAuthRequest(
    [Required] string IdToken
);

public record AuthResponse(
    string Token,
    UserDto User
);

public record UserDto(
    Guid Id,
    string FullName,
    string Email,
    string? Phone,
    string AuthProvider,
    string Role
);

public record ErrorResponse(string Message);
