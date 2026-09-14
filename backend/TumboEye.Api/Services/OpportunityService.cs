using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using TumboEye.Api.Data;
using TumboEye.Api.DTOs;
using TumboEye.Api.Models;

namespace TumboEye.Api.Services;

public interface IOpportunityService
{
    Task<PagedOpportunitiesDto> GetPublicAsync(
        int page,
        int limit,
        string? search,
        string? category,
        string? location,
        string? opportunityType,
        string? experience,
        string? sort);

    Task<OpportunityDetailDto?> GetPublicByIdOrSlugAsync(string idOrSlug);

    Task<PagedOpportunitiesDto> GetAdminListAsync(
        int page,
        int limit,
        string? search,
        string? category,
        string? status);

    Task<OpportunityDetailDto?> GetAdminByIdAsync(Guid id);

    Task<(OpportunityDetailDto? Result, string? Error)> CreateAsync(UpsertOpportunityRequest request);

    Task<(OpportunityDetailDto? Result, string? Error)> UpdateAsync(Guid id, UpsertOpportunityRequest request);

    Task<(OpportunityDetailDto? Result, string? Error)> UpdateStatusAsync(Guid id, string status);

    Task<(bool Ok, string? Error)> SoftDeleteAsync(Guid id);
}

public class OpportunityService : IOpportunityService
{
    private readonly AppDbContext _db;

    public OpportunityService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<PagedOpportunitiesDto> GetPublicAsync(
        int page,
        int limit,
        string? search,
        string? category,
        string? location,
        string? opportunityType,
        string? experience,
        string? sort)
    {
        page = Math.Max(1, page);
        limit = Math.Clamp(limit, 1, 50);

        var query = _db.Opportunities.AsNoTracking()
            .Where(o => !o.IsDeleted && o.Status == OpportunityStatus.Published);

        if (!string.IsNullOrWhiteSpace(category) &&
            !category.Equals("All", StringComparison.OrdinalIgnoreCase))
        {
            query = query.Where(o => o.Category == category);
        }

        if (!string.IsNullOrWhiteSpace(location))
        {
            var loc = location.Trim().ToLower();
            query = query.Where(o =>
                (o.City != null && o.City.ToLower().Contains(loc)) ||
                (o.LocationLabel != null && o.LocationLabel.ToLower().Contains(loc)) ||
                (o.RegionOrState != null && o.RegionOrState.ToLower().Contains(loc)) ||
                (o.Country != null && o.Country.ToLower().Contains(loc)));
        }

        if (!string.IsNullOrWhiteSpace(opportunityType))
        {
            var type = opportunityType.Trim().ToLower();
            query = query.Where(o =>
                (o.OpportunityType != null && o.OpportunityType.ToLower().Contains(type)) ||
                (o.Tag != null && o.Tag.ToLower() == type));
        }

        if (!string.IsNullOrWhiteSpace(experience))
        {
            var exp = experience.Trim().ToLower();
            query = query.Where(o =>
                o.ExperienceRequired != null && o.ExperienceRequired.ToLower().Contains(exp));
        }

        if (!string.IsNullOrWhiteSpace(search))
        {
            var q = search.Trim().ToLower();
            query = query.Where(o =>
                o.Title.ToLower().Contains(q) ||
                (o.ShortDescription != null && o.ShortDescription.ToLower().Contains(q)) ||
                (o.Organization != null && o.Organization.ToLower().Contains(q)) ||
                (o.LocationLabel != null && o.LocationLabel.ToLower().Contains(q)) ||
                o.Category.ToLower().Contains(q));
        }

        query = (sort?.Trim().ToLowerInvariant()) switch
        {
            "latest" => query.OrderByDescending(o => o.PostedAt),
            "most popular" or "popular" => query.OrderByDescending(o => o.PopularityScore).ThenByDescending(o => o.PostedAt),
            _ => query.OrderByDescending(o => o.IsFeatured).ThenByDescending(o => o.PostedAt)
        };

        var total = await query.CountAsync();
        var totalPages = Math.Max(1, (int)Math.Ceiling(total / (double)limit));

        var items = await query
            .Skip((page - 1) * limit)
            .Take(limit)
            .ToListAsync();

        return new PagedOpportunitiesDto(
            items.Select(MapListItem).ToList(),
            page,
            limit,
            total,
            totalPages);
    }

    public async Task<OpportunityDetailDto?> GetPublicByIdOrSlugAsync(string idOrSlug)
    {
        Opportunity? entity = null;

        if (Guid.TryParse(idOrSlug, out var id))
        {
            entity = await _db.Opportunities.AsNoTracking()
                .FirstOrDefaultAsync(o => o.Id == id && !o.IsDeleted && o.Status == OpportunityStatus.Published);
        }

        entity ??= await _db.Opportunities.AsNoTracking()
            .FirstOrDefaultAsync(o => o.Slug == idOrSlug && !o.IsDeleted && o.Status == OpportunityStatus.Published);

        return entity is null ? null : MapDetail(entity);
    }

    public async Task<PagedOpportunitiesDto> GetAdminListAsync(
        int page,
        int limit,
        string? search,
        string? category,
        string? status)
    {
        page = Math.Max(1, page);
        limit = Math.Clamp(limit, 1, 100);

        var query = _db.Opportunities.AsNoTracking().Where(o => !o.IsDeleted);

        if (!string.IsNullOrWhiteSpace(category) &&
            !category.Equals("All", StringComparison.OrdinalIgnoreCase))
        {
            query = query.Where(o => o.Category == category);
        }

        if (!string.IsNullOrWhiteSpace(status) &&
            Enum.TryParse<OpportunityStatus>(status, true, out var statusEnum))
        {
            query = query.Where(o => o.Status == statusEnum);
        }

        if (!string.IsNullOrWhiteSpace(search))
        {
            var q = search.Trim().ToLower();
            query = query.Where(o =>
                o.Title.ToLower().Contains(q) ||
                (o.LocationLabel != null && o.LocationLabel.ToLower().Contains(q)) ||
                o.Category.ToLower().Contains(q));
        }

        query = query.OrderByDescending(o => o.UpdatedAt);

        var total = await query.CountAsync();
        var totalPages = Math.Max(1, (int)Math.Ceiling(total / (double)limit));

        var items = await query
            .Skip((page - 1) * limit)
            .Take(limit)
            .ToListAsync();

        return new PagedOpportunitiesDto(
            items.Select(MapListItem).ToList(),
            page,
            limit,
            total,
            totalPages);
    }

    public async Task<OpportunityDetailDto?> GetAdminByIdAsync(Guid id)
    {
        var entity = await _db.Opportunities.AsNoTracking()
            .FirstOrDefaultAsync(o => o.Id == id && !o.IsDeleted);
        return entity is null ? null : MapDetail(entity);
    }

    public async Task<(OpportunityDetailDto? Result, string? Error)> CreateAsync(UpsertOpportunityRequest request)
    {
        var validationError = Validate(request);
        if (validationError is not null)
        {
            return (null, validationError);
        }

        var now = DateTime.UtcNow;
        var status = ParseStatus(request.Status) ?? OpportunityStatus.Draft;
        var slug = await EnsureUniqueSlugAsync(Slugify(request.Title));

        var entity = new Opportunity
        {
            Id = Guid.NewGuid(),
            Title = request.Title.Trim(),
            Slug = slug,
            Category = request.Category.Trim(),
            CreatedAt = now,
            UpdatedAt = now,
            PostedAt = request.PostedAt?.ToUniversalTime() ?? now
        };

        ApplyRequest(entity, request, status, now);
        _db.Opportunities.Add(entity);
        await _db.SaveChangesAsync();

        return (MapDetail(entity), null);
    }

    public async Task<(OpportunityDetailDto? Result, string? Error)> UpdateAsync(Guid id, UpsertOpportunityRequest request)
    {
        var validationError = Validate(request);
        if (validationError is not null)
        {
            return (null, validationError);
        }

        var entity = await _db.Opportunities.FirstOrDefaultAsync(o => o.Id == id && !o.IsDeleted);
        if (entity is null)
        {
            return (null, "Opportunity not found.");
        }

        var now = DateTime.UtcNow;
        var status = ParseStatus(request.Status) ?? entity.Status;

        if (!string.Equals(entity.Title, request.Title.Trim(), StringComparison.Ordinal))
        {
            entity.Slug = await EnsureUniqueSlugAsync(Slugify(request.Title), entity.Id);
        }

        entity.Title = request.Title.Trim();
        ApplyRequest(entity, request, status, now);
        entity.UpdatedAt = now;

        await _db.SaveChangesAsync();
        return (MapDetail(entity), null);
    }

    public async Task<(OpportunityDetailDto? Result, string? Error)> UpdateStatusAsync(Guid id, string status)
    {
        var entity = await _db.Opportunities.FirstOrDefaultAsync(o => o.Id == id && !o.IsDeleted);
        if (entity is null)
        {
            return (null, "Opportunity not found.");
        }

        var parsed = ParseStatus(status);
        if (parsed is null)
        {
            return (null, "Status must be Draft, Published, or Unpublished.");
        }

        var now = DateTime.UtcNow;
        ApplyStatus(entity, parsed.Value, now);
        entity.UpdatedAt = now;
        await _db.SaveChangesAsync();
        return (MapDetail(entity), null);
    }

    public async Task<(bool Ok, string? Error)> SoftDeleteAsync(Guid id)
    {
        var entity = await _db.Opportunities.FirstOrDefaultAsync(o => o.Id == id && !o.IsDeleted);
        if (entity is null)
        {
            return (false, "Opportunity not found.");
        }

        entity.IsDeleted = true;
        entity.Status = OpportunityStatus.Unpublished;
        entity.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        return (true, null);
    }

    private static string? Validate(UpsertOpportunityRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Title))
        {
            return "Title is required.";
        }

        if (string.IsNullOrWhiteSpace(request.Category))
        {
            return "Category is required.";
        }

        if (!string.IsNullOrWhiteSpace(request.ApplyUrl))
        {
            if (!Uri.TryCreate(request.ApplyUrl.Trim(), UriKind.Absolute, out var uri) ||
                (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
            {
                return "Apply Now URL must be a valid http(s) URL.";
            }
        }

        return null;
    }

    private static void ApplyRequest(
        Opportunity entity,
        UpsertOpportunityRequest request,
        OpportunityStatus status,
        DateTime now)
    {
        entity.Category = request.Category.Trim();
        entity.OpportunityType = Normalize(request.OpportunityType);
        entity.Organization = Normalize(request.Organization);
        entity.Country = Normalize(request.Country);
        entity.RegionOrState = Normalize(request.RegionOrState);
        entity.City = Normalize(request.City);
        entity.LocationLabel = Normalize(request.LocationLabel)
            ?? BuildLocationLabel(request.City, request.RegionOrState, request.Country);
        entity.ImageUrl = Normalize(request.ImageUrl);
        entity.ImageAlt = Normalize(request.ImageAlt) ?? entity.Title;
        entity.ShortDescription = Normalize(request.ShortDescription);
        entity.SalaryText = Normalize(request.SalaryText);
        entity.ExperienceRequired = Normalize(request.ExperienceRequired);
        entity.EducationRequired = Normalize(request.EducationRequired);
        entity.Tag = Normalize(request.Tag);
        entity.TagLabel = Normalize(request.TagLabel);
        entity.DetailIcon = Normalize(request.DetailIcon) ?? "briefcase";
        entity.ApplicationDeadline = request.ApplicationDeadline?.ToUniversalTime();
        entity.ApplyUrl = Normalize(request.ApplyUrl);
        entity.AboutContent = Normalize(request.AboutContent);
        entity.RequirementsContent = Normalize(request.RequirementsContent);
        entity.HowToApplyContent = Normalize(request.HowToApplyContent);
        entity.IsFeatured = request.IsFeatured;
        entity.PopularityScore = Math.Max(0, request.PopularityScore);

        if (request.PostedAt.HasValue)
        {
            entity.PostedAt = request.PostedAt.Value.ToUniversalTime();
        }

        ApplyStatus(entity, status, now);
    }

    private static void ApplyStatus(Opportunity entity, OpportunityStatus status, DateTime now)
    {
        entity.Status = status;
        if (status == OpportunityStatus.Published)
        {
            entity.PublishedAt ??= now;
        }
    }

    private static OpportunityStatus? ParseStatus(string? status)
    {
        if (string.IsNullOrWhiteSpace(status))
        {
            return null;
        }

        return Enum.TryParse<OpportunityStatus>(status.Trim(), true, out var parsed)
            ? parsed
            : null;
    }

    private async Task<string> EnsureUniqueSlugAsync(string baseSlug, Guid? excludeId = null)
    {
        var slug = baseSlug;
        var i = 2;
        while (await _db.Opportunities.AnyAsync(o =>
                   o.Slug == slug && !o.IsDeleted && (!excludeId.HasValue || o.Id != excludeId.Value)))
        {
            slug = $"{baseSlug}-{i++}";
        }

        return slug;
    }

    private static string Slugify(string title)
    {
        var normalized = title.Trim().ToLowerInvariant().Normalize(NormalizationForm.FormD);
        var sb = new StringBuilder();
        foreach (var c in normalized)
        {
            var uc = CharUnicodeInfo.GetUnicodeCategory(c);
            if (uc == UnicodeCategory.NonSpacingMark)
            {
                continue;
            }

            if (char.IsLetterOrDigit(c))
            {
                sb.Append(c);
            }
            else if (char.IsWhiteSpace(c) || c is '-' or '_')
            {
                sb.Append('-');
            }
        }

        var slug = Regex.Replace(sb.ToString(), "-+", "-").Trim('-');
        return string.IsNullOrWhiteSpace(slug) ? $"opportunity-{Guid.NewGuid():N}"[..20] : slug;
    }

    private static string? Normalize(string? value) =>
        string.IsNullOrWhiteSpace(value) ? null : value.Trim();

    private static string? BuildLocationLabel(string? city, string? region, string? country)
    {
        var parts = new[] { city, region, country }
            .Where(p => !string.IsNullOrWhiteSpace(p))
            .Select(p => p!.Trim())
            .ToArray();
        return parts.Length == 0 ? null : string.Join(", ", parts);
    }

    private static OpportunityListItemDto MapListItem(Opportunity o) => new(
        o.Id,
        o.Title,
        o.Slug,
        o.Category,
        o.OpportunityType,
        o.Organization,
        o.LocationLabel,
        o.City,
        o.ImageUrl,
        o.ImageAlt,
        o.ShortDescription,
        o.SalaryText,
        o.ExperienceRequired,
        o.Tag,
        o.TagLabel,
        o.DetailIcon,
        o.PostedAt,
        o.ApplicationDeadline,
        o.ApplyUrl,
        o.IsFeatured,
        o.PopularityScore,
        o.Status.ToString(),
        o.PublishedAt);

    private static OpportunityDetailDto MapDetail(Opportunity o) => new(
        o.Id,
        o.Title,
        o.Slug,
        o.Category,
        o.OpportunityType,
        o.Organization,
        o.Country,
        o.RegionOrState,
        o.City,
        o.LocationLabel,
        o.ImageUrl,
        o.ImageAlt,
        o.ShortDescription,
        o.SalaryText,
        o.ExperienceRequired,
        o.EducationRequired,
        o.Tag,
        o.TagLabel,
        o.DetailIcon,
        o.PostedAt,
        o.ApplicationDeadline,
        o.ApplyUrl,
        o.AboutContent,
        o.RequirementsContent,
        o.HowToApplyContent,
        o.IsFeatured,
        o.PopularityScore,
        o.Status.ToString(),
        o.CreatedAt,
        o.UpdatedAt,
        o.PublishedAt);
}
