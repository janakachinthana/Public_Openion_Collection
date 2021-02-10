using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Public_Opinion_Collection.Authorization;
using Public_Opinion_Collection.Domain;
using System;

namespace Public_Opinion_Collection.Service
{
    //[AbpAuthorize(PermissionNames.Pages_Petitions)]
    public class PetitionAppService : AsyncCrudAppService<Petition, PetitionDto, Guid>, IPetitionAppService
    {
        public PetitionAppService(IRepository<Petition, Guid> repository) : base(repository)
        {
        }
    }
}
