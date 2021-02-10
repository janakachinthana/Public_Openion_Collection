using System.Threading.Tasks;
using Abp.Application.Services;
using Public_Opinion_Collection.Authorization.Accounts.Dto;

namespace Public_Opinion_Collection.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
