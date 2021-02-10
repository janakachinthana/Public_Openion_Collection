using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Public_Opinion_Collection.Migrations
{
    public partial class LikeStatusModelAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LikeStatus",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true),
                    PetitionId = table.Column<string>(nullable: true),
                    Like = table.Column<bool>(nullable: false),
                    DisLike = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LikeStatus", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LikeStatus");
        }
    }
}
