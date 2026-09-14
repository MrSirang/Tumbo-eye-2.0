namespace TumboEye.Api.Models;

public class User
{
    public Guid Id { get; set; }

    public required string FullName { get; set; }

    public required string Email { get; set; }

    public string? Phone { get; set; }

    public string? PasswordHash { get; set; }

    public string? GoogleId { get; set; }

    public AuthProvider AuthProvider { get; set; }

    public UserRole Role { get; set; } = UserRole.User;

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }
}

public enum AuthProvider
{
    Email = 0,
    Google = 1
}

public enum UserRole
{
    User = 0,
    Admin = 1
}
