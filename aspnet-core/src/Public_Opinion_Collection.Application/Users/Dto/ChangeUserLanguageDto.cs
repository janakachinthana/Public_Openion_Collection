using System.ComponentModel.DataAnnotations;

namespace Public_Opinion_Collection.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}