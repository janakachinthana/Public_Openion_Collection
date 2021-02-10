using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Public_Opinion_Collection.EntityFrameworkCore;
using Public_Opinion_Collection.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Public_Opinion_Collection.Web.Tests
{
    [DependsOn(
        typeof(Public_Opinion_CollectionWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class Public_Opinion_CollectionWebTestModule : AbpModule
    {
        public Public_Opinion_CollectionWebTestModule(Public_Opinion_CollectionEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Public_Opinion_CollectionWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(Public_Opinion_CollectionWebMvcModule).Assembly);
        }
    }
}