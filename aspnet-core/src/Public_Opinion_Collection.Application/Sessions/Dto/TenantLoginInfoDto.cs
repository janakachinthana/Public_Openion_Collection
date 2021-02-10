using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Public_Opinion_Collection.MultiTenancy;

namespace Public_Opinion_Collection.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
