using Microsoft.EntityFrameworkCore;
using TumboEye.Api.Data;
using TumboEye.Api.Models;

namespace TumboEye.Api.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(AppDbContext db, IConfiguration config)
    {
        var adminEmail = (config["Admin:Email"] ?? "admin@tumbo.co.za").Trim().ToLowerInvariant();
        var adminPassword = config["Admin:Password"] ?? "TumboAdmin2026!";
        var adminName = config["Admin:FullName"] ?? "Tumbo Admin";

        var admin = await db.Users.FirstOrDefaultAsync(u => u.Email == adminEmail);
        if (admin is null)
        {
            var now = DateTime.UtcNow;
            db.Users.Add(new User
            {
                Id = Guid.NewGuid(),
                FullName = adminName,
                Email = adminEmail,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(adminPassword),
                AuthProvider = AuthProvider.Email,
                Role = UserRole.Admin,
                CreatedAt = now,
                UpdatedAt = now
            });
            await db.SaveChangesAsync();
            return;
        }

        if (admin.Role != UserRole.Admin)
        {
            admin.Role = UserRole.Admin;
            admin.UpdatedAt = DateTime.UtcNow;
            await db.SaveChangesAsync();
        }
    }
}
