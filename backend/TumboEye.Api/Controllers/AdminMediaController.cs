using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TumboEye.Api.DTOs;

namespace TumboEye.Api.Controllers;

[ApiController]
[Authorize(Roles = "Admin")]
[Route("api/admin/media")]
public class AdminMediaController : ControllerBase
{
    private static readonly HashSet<string> AllowedExtensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ".jpg", ".jpeg", ".png", ".webp", ".gif"
    };

    private const long MaxBytes = 5 * 1024 * 1024;

    private readonly IWebHostEnvironment _env;

    public AdminMediaController(IWebHostEnvironment env)
    {
        _env = env;
    }

    [HttpPost]
    [RequestSizeLimit(MaxBytes)]
    public async Task<IActionResult> Upload(IFormFile file)
    {
        if (file is null || file.Length == 0)
        {
            return BadRequest(new ErrorResponse("Please choose an image file."));
        }

        if (file.Length > MaxBytes)
        {
            return BadRequest(new ErrorResponse("Image must be 5 MB or smaller."));
        }

        var ext = Path.GetExtension(file.FileName);
        if (string.IsNullOrWhiteSpace(ext) || !AllowedExtensions.Contains(ext))
        {
            return BadRequest(new ErrorResponse("Only JPG, PNG, WEBP, or GIF images are allowed."));
        }

        var contentType = file.ContentType?.ToLowerInvariant() ?? string.Empty;
        if (!contentType.StartsWith("image/"))
        {
            return BadRequest(new ErrorResponse("File must be an image."));
        }

        var webRoot = _env.WebRootPath ?? Path.Combine(_env.ContentRootPath, "wwwroot");
        var folder = Path.Combine(webRoot, "uploads", "opportunities");
        Directory.CreateDirectory(folder);

        var fileName = $"{Guid.NewGuid():N}{ext.ToLowerInvariant()}";
        var path = Path.Combine(folder, fileName);

        await using (var stream = System.IO.File.Create(path))
        {
            await file.CopyToAsync(stream);
        }

        var url = $"/uploads/opportunities/{fileName}";
        return Ok(new MediaUploadResponse(url, fileName));
    }
}
