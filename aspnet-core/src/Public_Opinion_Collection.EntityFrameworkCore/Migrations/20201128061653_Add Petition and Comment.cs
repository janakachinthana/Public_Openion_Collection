using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Public_Opinion_Collection.Migrations
{
    public partial class AddPetitionandComment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true),
                    Message = table.Column<string>(nullable: false),
                    PetitionId = table.Column<int>(nullable: false),
                    Auther = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Petitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true),
                    Title = table.Column<string>(maxLength: 250, nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Category = table.Column<string>(maxLength: 250, nullable: false),
                    Likes = table.Column<int>(nullable: false),
                    Auther = table.Column<string>(maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Petitions", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "Petitions");
        }
    }
}
