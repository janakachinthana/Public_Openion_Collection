using Microsoft.EntityFrameworkCore.Migrations;

namespace Public_Opinion_Collection.Migrations
{
    public partial class dislikeatributeaddedandpetitionIdofcommentischanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DisLikes",
                table: "Petitions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "PetitionId",
                table: "Comments",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisLikes",
                table: "Petitions");

            migrationBuilder.AlterColumn<int>(
                name: "PetitionId",
                table: "Comments",
                type: "int",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
