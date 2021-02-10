using AutoMapper;
using Public_Opinion_Collection.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.Service.Dto
{
    class LikeStatusMappingProfile : Profile
    {
        public LikeStatusMappingProfile()
        {
            CreateMap<LikeStatusDto, LikeStatus>();
        }
    }
}
