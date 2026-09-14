using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TumboEye.Api.DTOs;
using TumboEye.Api.Services;

namespace TumboEye.Api.Controllers;

[ApiController]
[Authorize(Roles = "Admin")]
[Route("api/admin/opportunities")]
public class AdminOpportunitiesController : ControllerBase
{
    private readonly IOpportunityService _opportunities;

    public AdminOpportunitiesController(IOpportunityService opportunities)
    {
        _opportunities = opportunities;
    }

    [HttpGet]
    public async Task<IActionResult> List(
        [FromQuery] int page = 1,
        [FromQuery] int limit = 20,
        [FromQuery] string? search = null,
        [FromQuery] string? category = null,
        [FromQuery] string? status = null)
    {
        var result = await _opportunities.GetAdminListAsync(page, limit, search, category, status);
        return Ok(result);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get(Guid id)
    {
        var item = await _opportunities.GetAdminByIdAsync(id);
        if (item is null)
        {
            return NotFound(new ErrorResponse("Opportunity not found."));
        }

        return Ok(item);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] UpsertOpportunityRequest request)
    {
        var (result, error) = await _opportunities.CreateAsync(request);
        if (error is not null)
        {
            return BadRequest(new ErrorResponse(error));
        }

        return CreatedAtAction(nameof(Get), new { id = result!.Id }, result);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, [FromBody] UpsertOpportunityRequest request)
    {
        var (result, error) = await _opportunities.UpdateAsync(id, request);
        if (error is not null)
        {
            return error.Contains("not found", StringComparison.OrdinalIgnoreCase)
                ? NotFound(new ErrorResponse(error))
                : BadRequest(new ErrorResponse(error));
        }

        return Ok(result);
    }

    [HttpPatch("{id:guid}/status")]
    public async Task<IActionResult> UpdateStatus(Guid id, [FromBody] UpdateOpportunityStatusRequest request)
    {
        var (result, error) = await _opportunities.UpdateStatusAsync(id, request.Status);
        if (error is not null)
        {
            return error.Contains("not found", StringComparison.OrdinalIgnoreCase)
                ? NotFound(new ErrorResponse(error))
                : BadRequest(new ErrorResponse(error));
        }

        return Ok(result);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var (ok, error) = await _opportunities.SoftDeleteAsync(id);
        if (!ok)
        {
            return NotFound(new ErrorResponse(error ?? "Opportunity not found."));
        }

        return NoContent();
    }
}
