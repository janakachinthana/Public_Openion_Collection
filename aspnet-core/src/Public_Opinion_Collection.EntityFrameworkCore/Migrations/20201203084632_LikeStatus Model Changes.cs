using Microsoft.EntityFrameworkCore.Migrations;

namespace Public_Opinion_Collection.Migrations
{
    public partial class LikeStatusModelChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PetitionId",
                table: "LikeStatus",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "LikeStatus",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "LikeStatus");

            migrationBuilder.AlterColumn<string>(
                name: "PetitionId",
                table: "LikeStatus",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
