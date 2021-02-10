using Abp.Application.Services;
using Abp.Domain.Repositories;
using Public_Opinion_Collection.Domain;
using Public_Opinion_Collection.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.Service
{
   public class LikeStatusAppService : AsyncCrudAppService<LikeStatus, LikeStatusDto, Guid>, ILikeStatusAppService
    {

        public LikeStatusAppService(IRepository<LikeStatus, Guid> repository) : base(repository)
        {
        }
    }
}
