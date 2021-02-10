using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Public_Opinion_Collection.Authorization;

namespace Public_Opinion_Collection
{
    [DependsOn(
        typeof(Public_Opinion_CollectionCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class Public_Opinion_CollectionApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<Public_Opinion_CollectionAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(Public_Opinion_CollectionApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
