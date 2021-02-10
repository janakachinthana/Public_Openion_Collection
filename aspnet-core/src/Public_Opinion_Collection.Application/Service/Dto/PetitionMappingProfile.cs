using AutoMapper;
using Public_Opinion_Collection.Domain;

namespace Public_Opinion_Collection.Service.Dto
{
    class PetitionMappingProfile : Profile
    {
        public PetitionMappingProfile()
        {
            CreateMap<PetitionDto, Petition>();
        }
    }
}
