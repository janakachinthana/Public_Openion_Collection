using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.Service

{
    public interface IPetitionAppService : IAsyncCrudAppService<PetitionDto, Guid>
    {
    }
}
