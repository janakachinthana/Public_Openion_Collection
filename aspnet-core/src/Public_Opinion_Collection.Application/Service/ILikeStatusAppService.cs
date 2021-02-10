using Abp.Application.Services;
using Public_Opinion_Collection.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.Service
{
    public interface ILikeStatusAppService : IAsyncCrudAppService<LikeStatusDto, Guid>
    {
    }
}
