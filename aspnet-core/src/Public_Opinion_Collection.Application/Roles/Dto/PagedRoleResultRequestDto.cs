using Abp.Application.Services.Dto;

namespace Public_Opinion_Collection.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

