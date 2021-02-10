using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Public_Opinion_Collection.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.Service.Dto
{
    [AutoMapFrom(typeof(LikeStatus))]
    public class LikeStatusDto : AuditedEntityDto<Guid>
    {

        public string PetitionId { get; set; }
        public Boolean Like { get; set; }
        public Boolean DisLike { get; set; }
        public string UserId { get; set; }

    }
}
