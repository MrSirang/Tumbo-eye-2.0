using Microsoft.AspNetCore.Mvc;
using TumboEye.Api.Services;

namespace TumboEye.Api.Controllers;

[ApiController]
[Route("api/opportunities")]
public class OpportunitiesController : ControllerBase
{
    private readonly IOpportunityService _opportunities;

    public OpportunitiesController(IOpportunityService opportunities)
    {
        _opportunities = opportunities;
    }

    /// <summary>Public list — published only. Default page size 12.</summary>
    [HttpGet]
    public async Task<IActionResult> List(
        [FromQuery] int page = 1,
        [FromQuery] int limit = 12,
        [FromQuery] string? search = null,
        [FromQuery] string? category = null,
        [FromQuery] string? location = null,
        [FromQuery] string? opportunityType = null,
        [FromQuery] string? experience = null,
        [FromQuery] string? sort = null)
    {
        var result = await _opportunities.GetPublicAsync(
            page, limit, search, category, location, opportunityType, experience, sort);
        return Ok(result);
    }

    [HttpGet("{idOrSlug}")]
    public async Task<IActionResult> GetByIdOrSlug(string idOrSlug)
    {
        var item = await _opportunities.GetPublicByIdOrSlugAsync(idOrSlug);
        if (item is null)
        {
            return NotFound(new { message = "Opportunity not found." });
        }

        return Ok(item);
    }
}
