using System.Threading.Tasks;
using Abp.Application.Services;
using Public_Opinion_Collection.Sessions.Dto;

namespace Public_Opinion_Collection.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
