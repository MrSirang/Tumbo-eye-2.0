namespace TumboEye.Api.Models;

public class Opportunity
{
    public Guid Id { get; set; }

    public required string Title { get; set; }

    public required string Slug { get; set; }

    /// <summary>Jobs, Scholarships, Internships, Grants, Training, Volunteering, Partnerships</summary>
    public required string Category { get; set; }

    /// <summary>Full-time, Part-time, Internship, Scholarship, etc.</summary>
    public string? OpportunityType { get; set; }

    public string? Organization { get; set; }

    public string? Country { get; set; }

    public string? RegionOrState { get; set; }

    public string? City { get; set; }

    /// <summary>Display label e.g. "Midrand, GP"</summary>
    public string? LocationLabel { get; set; }

    public string? ImageUrl { get; set; }

    public string? ImageAlt { get; set; }

    public string? ShortDescription { get; set; }

    public string? SalaryText { get; set; }

    public string? ExperienceRequired { get; set; }

    public string? EducationRequired { get; set; }

    /// <summary>Frontend card tag: job, small-shop, service, stock-sell, locally-produced</summary>
    public string? Tag { get; set; }

    public string? TagLabel { get; set; }

    /// <summary>briefcase, store, wrench, basket, palette</summary>
    public string? DetailIcon { get; set; }

    public DateTime PostedAt { get; set; }

    public DateTime? ApplicationDeadline { get; set; }

    public string? ApplyUrl { get; set; }

    public string? AboutContent { get; set; }

    /// <summary>Newline-separated or JSON array stored as text</summary>
    public string? RequirementsContent { get; set; }

    public string? HowToApplyContent { get; set; }

    public OpportunityStatus Status { get; set; } = OpportunityStatus.Draft;

    public bool IsFeatured { get; set; }

    public int PopularityScore { get; set; }

    public bool IsDeleted { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public DateTime? PublishedAt { get; set; }
}

public enum OpportunityStatus
{
    Draft = 0,
    Published = 1,
    Unpublished = 2
}
