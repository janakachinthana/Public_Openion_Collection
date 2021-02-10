using Microsoft.EntityFrameworkCore.Migrations;

namespace Public_Opinion_Collection.Migrations
{
    public partial class Undo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisLikes",
                table: "Petitions");

            migrationBuilder.AlterColumn<int>(
                name: "PetitionId",
                table: "Comments",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DisLikes",
                table: "Petitions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "PetitionId",
                table: "Comments",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
