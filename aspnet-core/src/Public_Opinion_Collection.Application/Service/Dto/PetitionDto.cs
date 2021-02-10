
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Public_Opinion_Collection.Domain;
using System;

namespace Public_Opinion_Collection.Service
{
    [AutoMapFrom(typeof(Petition))]
    public class PetitionDto : AuditedEntityDto<Guid>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public int Likes { get; set; }
        public int DisLikes { get; set; }
        public string Auther { get; set; }

    }
}