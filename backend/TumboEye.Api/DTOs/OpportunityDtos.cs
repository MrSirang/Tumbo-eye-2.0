using System.ComponentModel.DataAnnotations;
using TumboEye.Api.Models;

namespace TumboEye.Api.DTOs;

public record OpportunityListItemDto(
    Guid Id,
    string Title,
    string Slug,
    string Category,
    string? OpportunityType,
    string? Organization,
    string? LocationLabel,
    string? City,
    string? ImageUrl,
    string? ImageAlt,
    string? ShortDescription,
    string? SalaryText,
    string? ExperienceRequired,
    string? Tag,
    string? TagLabel,
    string? DetailIcon,
    DateTime PostedAt,
    DateTime? ApplicationDeadline,
    string? ApplyUrl,
    bool IsFeatured,
    int PopularityScore,
    string Status,
    DateTime? PublishedAt
);

public record OpportunityDetailDto(
    Guid Id,
    string Title,
    string Slug,
    string Category,
    string? OpportunityType,
    string? Organization,
    string? Country,
    string? RegionOrState,
    string? City,
    string? LocationLabel,
    string? ImageUrl,
    string? ImageAlt,
    string? ShortDescription,
    string? SalaryText,
    string? ExperienceRequired,
    string? EducationRequired,
    string? Tag,
    string? TagLabel,
    string? DetailIcon,
    DateTime PostedAt,
    DateTime? ApplicationDeadline,
    string? ApplyUrl,
    string? AboutContent,
    string? RequirementsContent,
    string? HowToApplyContent,
    bool IsFeatured,
    int PopularityScore,
    string Status,
    DateTime CreatedAt,
    DateTime UpdatedAt,
    DateTime? PublishedAt
);

public record PagedOpportunitiesDto(
    IReadOnlyList<OpportunityListItemDto> Items,
    int Page,
    int Limit,
    int Total,
    int TotalPages
);

public class UpsertOpportunityRequest
{
    [Required, MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required, MaxLength(80)]
    public string Category { get; set; } = string.Empty;

    [MaxLength(80)]
    public string? OpportunityType { get; set; }

    [MaxLength(200)]
    public string? Organization { get; set; }

    [MaxLength(100)]
    public string? Country { get; set; }

    [MaxLength(100)]
    public string? RegionOrState { get; set; }

    [MaxLength(100)]
    public string? City { get; set; }

    [MaxLength(200)]
    public string? LocationLabel { get; set; }

    [MaxLength(500)]
    public string? ImageUrl { get; set; }

    [MaxLength(200)]
    public string? ImageAlt { get; set; }

    [MaxLength(1000)]
    public string? ShortDescription { get; set; }

    [MaxLength(200)]
    public string? SalaryText { get; set; }

    [MaxLength(200)]
    public string? ExperienceRequired { get; set; }

    [MaxLength(500)]
    public string? EducationRequired { get; set; }

    [MaxLength(40)]
    public string? Tag { get; set; }

    [MaxLength(40)]
    public string? TagLabel { get; set; }

    [MaxLength(40)]
    public string? DetailIcon { get; set; }

    public DateTime? PostedAt { get; set; }

    public DateTime? ApplicationDeadline { get; set; }

    [MaxLength(1000)]
    public string? ApplyUrl { get; set; }

    public string? AboutContent { get; set; }

    public string? RequirementsContent { get; set; }

    public string? HowToApplyContent { get; set; }

    public bool IsFeatured { get; set; }

    public int PopularityScore { get; set; }

    /// <summary>Draft | Published | Unpublished</summary>
    [MaxLength(20)]
    public string? Status { get; set; }
}

public class UpdateOpportunityStatusRequest
{
    [Required]
    public string Status { get; set; } = string.Empty;
}

public record MediaUploadResponse(string Url, string FileName);
