using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Public_Opinion_Collection.Configuration;
using Public_Opinion_Collection.EntityFrameworkCore;
using Public_Opinion_Collection.Migrator.DependencyInjection;

namespace Public_Opinion_Collection.Migrator
{
    [DependsOn(typeof(Public_Opinion_CollectionEntityFrameworkModule))]
    public class Public_Opinion_CollectionMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public Public_Opinion_CollectionMigratorModule(Public_Opinion_CollectionEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(Public_Opinion_CollectionMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                Public_Opinion_CollectionConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Public_Opinion_CollectionMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
