using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Timing;
using Abp.Zero;
using Abp.Zero.Configuration;
using Public_Opinion_Collection.Authorization.Roles;
using Public_Opinion_Collection.Authorization.Users;
using Public_Opinion_Collection.Configuration;
using Public_Opinion_Collection.Localization;
using Public_Opinion_Collection.MultiTenancy;
using Public_Opinion_Collection.Timing;

namespace Public_Opinion_Collection
{
    [DependsOn(typeof(AbpZeroCoreModule))]
    public class Public_Opinion_CollectionCoreModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Auditing.IsEnabledForAnonymousUsers = true;

            // Declare entity types
            Configuration.Modules.Zero().EntityTypes.Tenant = typeof(Tenant);
            Configuration.Modules.Zero().EntityTypes.Role = typeof(Role);
            Configuration.Modules.Zero().EntityTypes.User = typeof(User);

            Public_Opinion_CollectionLocalizationConfigurer.Configure(Configuration.Localization);

            // Enable this line to create a multi-tenant application.
            Configuration.MultiTenancy.IsEnabled = Public_Opinion_CollectionConsts.MultiTenancyEnabled;

            // Configure roles
            AppRoleConfig.Configure(Configuration.Modules.Zero().RoleManagement);

            Configuration.Settings.Providers.Add<AppSettingProvider>();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Public_Opinion_CollectionCoreModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            IocManager.Resolve<AppTimes>().StartupTime = Clock.Now;
        }
    }
}
