using AutoMapper;
using Public_Opinion_Collection.Domain;

namespace Public_Opinion_Collection.Service.Dto
{
    class CommentMappingProfile : Profile
    {
        public CommentMappingProfile()
        {
            CreateMap<CommentDto, Comment>();
        }
    }
}

