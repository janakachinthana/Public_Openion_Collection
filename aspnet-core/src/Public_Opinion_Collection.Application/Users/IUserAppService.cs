using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Public_Opinion_Collection.Roles.Dto;
using Public_Opinion_Collection.Users.Dto;

namespace Public_Opinion_Collection.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedUserResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);

        Task<bool> ChangePassword(ChangePasswordDto input);
    }
}
