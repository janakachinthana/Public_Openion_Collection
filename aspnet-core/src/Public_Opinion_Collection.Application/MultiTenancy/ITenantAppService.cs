using Abp.Application.Services;
using Public_Opinion_Collection.MultiTenancy.Dto;

namespace Public_Opinion_Collection.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

