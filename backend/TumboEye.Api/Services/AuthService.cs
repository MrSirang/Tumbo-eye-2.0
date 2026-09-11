using Google.Apis.Auth;
using Microsoft.EntityFrameworkCore;
using TumboEye.Api.Data;
using TumboEye.Api.DTOs;
using TumboEye.Api.Models;

namespace TumboEye.Api.Services;

public interface IAuthService
{
    Task<(AuthResponse? Result, string? Error)> RegisterAsync(RegisterRequest request);
    Task<(AuthResponse? Result, string? Error)> LoginAsync(LoginRequest request);
    Task<(AuthResponse? Result, string? Error)> GoogleSignInAsync(GoogleAuthRequest request);
}

public class AuthService : IAuthService
{
    private readonly AppDbContext _db;
    private readonly IJwtService _jwtService;
    private readonly IConfiguration _configuration;

    public AuthService(AppDbContext db, IJwtService jwtService, IConfiguration configuration)
    {
        _db = db;
        _jwtService = jwtService;
        _configuration = configuration;
    }

    public async Task<(AuthResponse? Result, string? Error)> RegisterAsync(RegisterRequest request)
    {
        if (!string.Equals(request.Password, request.ConfirmPassword, StringComparison.Ordinal))
        {
            return (null, "Passwords do not match.");
        }

        var normalizedEmail = request.Email.Trim().ToLowerInvariant();

        if (await _db.Users.AnyAsync(u => u.Email == normalizedEmail))
        {
            return (null, "An account with this email already exists.");
        }

        var now = DateTime.UtcNow;
        var user = new User
        {
            Id = Guid.NewGuid(),
            FullName = request.FullName.Trim(),
            Email = normalizedEmail,
            Phone = string.IsNullOrWhiteSpace(request.Phone) ? null : request.Phone.Trim(),
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
            AuthProvider = AuthProvider.Email,
            CreatedAt = now,
            UpdatedAt = now
        };

        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        return (BuildAuthResponse(user), null);
    }

    public async Task<(AuthResponse? Result, string? Error)> LoginAsync(LoginRequest request)
    {
        var normalizedEmail = request.Email.Trim().ToLowerInvariant();
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == normalizedEmail);

        if (user is null)
        {
            return (null, "Invalid email or password.");
        }

        if (user.AuthProvider == AuthProvider.Google && string.IsNullOrEmpty(user.PasswordHash))
        {
            return (null, "This account uses Google sign-in. Please continue with Google.");
        }

        if (string.IsNullOrEmpty(user.PasswordHash) ||
            !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
        {
            return (null, "Invalid email or password.");
        }

        user.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();

        return (BuildAuthResponse(user), null);
    }

    public async Task<(AuthResponse? Result, string? Error)> GoogleSignInAsync(GoogleAuthRequest request)
    {
        var clientId = _configuration["Google:ClientId"];
        if (string.IsNullOrWhiteSpace(clientId))
        {
            return (null, "Google sign-in is not configured on the server.");
        }

        GoogleJsonWebSignature.Payload payload;
        try
        {
            payload = await GoogleJsonWebSignature.ValidateAsync(
                request.IdToken,
                new GoogleJsonWebSignature.ValidationSettings
                {
                    Audience = new[] { clientId }
                });
        }
        catch
        {
            return (null, "Invalid Google token. Please try again.");
        }

        if (string.IsNullOrWhiteSpace(payload.Subject) || string.IsNullOrWhiteSpace(payload.Email))
        {
            return (null, "Google account is missing required profile information.");
        }

        var normalizedEmail = payload.Email.Trim().ToLowerInvariant();
        var user = await _db.Users.FirstOrDefaultAsync(u =>
            u.GoogleId == payload.Subject || u.Email == normalizedEmail);

        var now = DateTime.UtcNow;

        if (user is null)
        {
            user = new User
            {
                Id = Guid.NewGuid(),
                FullName = payload.Name ?? payload.Email,
                Email = normalizedEmail,
                GoogleId = payload.Subject,
                AuthProvider = AuthProvider.Google,
                CreatedAt = now,
                UpdatedAt = now
            };
            _db.Users.Add(user);
        }
        else
        {
            user.GoogleId ??= payload.Subject;
            user.FullName = payload.Name ?? user.FullName;
            user.UpdatedAt = now;

            if (user.AuthProvider == AuthProvider.Email && string.IsNullOrEmpty(user.GoogleId))
            {
                user.GoogleId = payload.Subject;
            }
        }

        await _db.SaveChangesAsync();
        return (BuildAuthResponse(user), null);
    }

    private AuthResponse BuildAuthResponse(User user)
    {
        return new AuthResponse(
            _jwtService.GenerateToken(user),
            new UserDto(
                user.Id,
                user.FullName,
                user.Email,
                user.Phone,
                user.AuthProvider.ToString()
            )
        );
    }
}
