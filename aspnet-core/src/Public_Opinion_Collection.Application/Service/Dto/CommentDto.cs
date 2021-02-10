using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Public_Opinion_Collection.Domain;
using System;

namespace Public_Opinion_Collection.Service
{
    [AutoMapFrom(typeof(Comment))]
   public class CommentDto : AuditedEntityDto<Guid>
    {

        public string Message { get; set; }
        public string PetitionId { get; set; }
        public string Auther { get; set; }

    }
}
