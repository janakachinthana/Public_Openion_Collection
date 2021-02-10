using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Public_Opinion_Collection.Authorization;
using Public_Opinion_Collection.Domain;
using System;

namespace Public_Opinion_Collection.Service
{
   // [AbpAuthorize(PermissionNames.Pages_Comments)]
    public class CommentAppService : AsyncCrudAppService<Comment, CommentDto, Guid>, ICommentAppService
    {
        public CommentAppService(IRepository<Comment, Guid> repository) : base(repository)
        {
        }
    }
}

