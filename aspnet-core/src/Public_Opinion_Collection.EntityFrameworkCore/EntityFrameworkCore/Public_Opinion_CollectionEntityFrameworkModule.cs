using Abp.EntityFrameworkCore.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.EntityFrameworkCore;
using Public_Opinion_Collection.EntityFrameworkCore.Seed;

namespace Public_Opinion_Collection.EntityFrameworkCore
{
    [DependsOn(
        typeof(Public_Opinion_CollectionCoreModule), 
        typeof(AbpZeroCoreEntityFrameworkCoreModule))]
    public class Public_Opinion_CollectionEntityFrameworkModule : AbpModule
    {
        /* Used it tests to skip dbcontext registration, in order to use in-memory database of EF Core */
        public bool SkipDbContextRegistration { get; set; }

        public bool SkipDbSeed { get; set; }

        public override void PreInitialize()
        {
            if (!SkipDbContextRegistration)
            {
                Configuration.Modules.AbpEfCore().AddDbContext<Public_Opinion_CollectionDbContext>(options =>
                {
                    if (options.ExistingConnection != null)
                    {
                        Public_Opinion_CollectionDbContextConfigurer.Configure(options.DbContextOptions, options.ExistingConnection);
                    }
                    else
                    {
                        Public_Opinion_CollectionDbContextConfigurer.Configure(options.DbContextOptions, options.ConnectionString);
                    }
                });
            }
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Public_Opinion_CollectionEntityFrameworkModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            if (!SkipDbSeed)
            {
                SeedHelper.SeedHostDb(IocManager);
            }
        }
    }
}
