using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Public_Opinion_Collection.Roles.Dto;

namespace Public_Opinion_Collection.Roles
{
    public interface IRoleAppService : IAsyncCrudAppService<RoleDto, int, PagedRoleResultRequestDto, CreateRoleDto, RoleDto>
    {
        Task<ListResultDto<PermissionDto>> GetAllPermissions();

        Task<GetRoleForEditOutput> GetRoleForEdit(EntityDto input);

        Task<ListResultDto<RoleListDto>> GetRolesAsync(GetRolesInput input);
    }
}
