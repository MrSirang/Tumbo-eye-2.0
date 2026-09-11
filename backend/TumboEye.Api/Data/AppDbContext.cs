using Microsoft.EntityFrameworkCore;
using TumboEye.Api.Models;

namespace TumboEye.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("users");

            entity.HasKey(u => u.Id);

            entity.Property(u => u.FullName)
                .HasMaxLength(200)
                .IsRequired();

            entity.Property(u => u.Email)
                .HasMaxLength(320)
                .IsRequired();

            entity.HasIndex(u => u.Email)
                .IsUnique();

            entity.HasIndex(u => u.GoogleId)
                .IsUnique()
                .HasFilter("\"GoogleId\" IS NOT NULL");

            entity.Property(u => u.Phone)
                .HasMaxLength(30);

            entity.Property(u => u.PasswordHash)
                .HasMaxLength(255);

            entity.Property(u => u.GoogleId)
                .HasMaxLength(128);

            entity.Property(u => u.AuthProvider)
                .HasConversion<string>()
                .HasMaxLength(20);
        });
    }
}
