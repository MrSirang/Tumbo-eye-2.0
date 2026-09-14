using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TumboEye.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddOpportunitiesCms : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "users",
                type: "character varying(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "User");

            migrationBuilder.CreateTable(
                name: "opportunities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Slug = table.Column<string>(type: "character varying(220)", maxLength: 220, nullable: false),
                    Category = table.Column<string>(type: "character varying(80)", maxLength: 80, nullable: false),
                    OpportunityType = table.Column<string>(type: "character varying(80)", maxLength: 80, nullable: true),
                    Organization = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    Country = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    RegionOrState = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    City = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    LocationLabel = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    ImageUrl = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    ImageAlt = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    ShortDescription = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true),
                    SalaryText = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    ExperienceRequired = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: true),
                    EducationRequired = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    Tag = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: true),
                    TagLabel = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: true),
                    DetailIcon = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: true),
                    PostedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ApplicationDeadline = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    ApplyUrl = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true),
                    AboutContent = table.Column<string>(type: "text", nullable: true),
                    RequirementsContent = table.Column<string>(type: "text", nullable: true),
                    HowToApplyContent = table.Column<string>(type: "text", nullable: true),
                    Status = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    IsFeatured = table.Column<bool>(type: "boolean", nullable: false),
                    PopularityScore = table.Column<int>(type: "integer", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    PublishedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_opportunities", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_opportunities_Category",
                table: "opportunities",
                column: "Category");

            migrationBuilder.CreateIndex(
                name: "IX_opportunities_City",
                table: "opportunities",
                column: "City");

            migrationBuilder.CreateIndex(
                name: "IX_opportunities_IsDeleted_Status",
                table: "opportunities",
                columns: new[] { "IsDeleted", "Status" });

            migrationBuilder.CreateIndex(
                name: "IX_opportunities_PostedAt",
                table: "opportunities",
                column: "PostedAt");

            migrationBuilder.CreateIndex(
                name: "IX_opportunities_Slug",
                table: "opportunities",
                column: "Slug",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_opportunities_Status",
                table: "opportunities",
                column: "Status");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "opportunities");
            migrationBuilder.DropColumn(name: "Role", table: "users");
        }
    }
}
