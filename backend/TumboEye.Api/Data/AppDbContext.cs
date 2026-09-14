using Microsoft.EntityFrameworkCore;
using TumboEye.Api.Models;

namespace TumboEye.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();
    public DbSet<Opportunity> Opportunities => Set<Opportunity>();

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

            entity.Property(u => u.Role)
                .HasConversion<string>()
                .HasMaxLength(20)
                .HasDefaultValue(UserRole.User);
        });

        modelBuilder.Entity<Opportunity>(entity =>
        {
            entity.ToTable("opportunities");

            entity.HasKey(o => o.Id);

            entity.Property(o => o.Title).HasMaxLength(200).IsRequired();
            entity.Property(o => o.Slug).HasMaxLength(220).IsRequired();
            entity.HasIndex(o => o.Slug).IsUnique();

            entity.Property(o => o.Category).HasMaxLength(80).IsRequired();
            entity.Property(o => o.OpportunityType).HasMaxLength(80);
            entity.Property(o => o.Organization).HasMaxLength(200);
            entity.Property(o => o.Country).HasMaxLength(100);
            entity.Property(o => o.RegionOrState).HasMaxLength(100);
            entity.Property(o => o.City).HasMaxLength(100);
            entity.Property(o => o.LocationLabel).HasMaxLength(200);
            entity.Property(o => o.ImageUrl).HasMaxLength(500);
            entity.Property(o => o.ImageAlt).HasMaxLength(200);
            entity.Property(o => o.ShortDescription).HasMaxLength(1000);
            entity.Property(o => o.SalaryText).HasMaxLength(200);
            entity.Property(o => o.ExperienceRequired).HasMaxLength(200);
            entity.Property(o => o.EducationRequired).HasMaxLength(500);
            entity.Property(o => o.Tag).HasMaxLength(40);
            entity.Property(o => o.TagLabel).HasMaxLength(40);
            entity.Property(o => o.DetailIcon).HasMaxLength(40);
            entity.Property(o => o.ApplyUrl).HasMaxLength(1000);

            entity.Property(o => o.Status)
                .HasConversion<string>()
                .HasMaxLength(20);

            entity.HasIndex(o => o.Status);
            entity.HasIndex(o => o.Category);
            entity.HasIndex(o => o.City);
            entity.HasIndex(o => o.PostedAt);
            entity.HasIndex(o => new { o.IsDeleted, o.Status });
        });
    }
}
