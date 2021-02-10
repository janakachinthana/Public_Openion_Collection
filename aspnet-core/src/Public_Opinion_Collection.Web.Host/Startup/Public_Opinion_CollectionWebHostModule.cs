using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Public_Opinion_Collection.Configuration;

namespace Public_Opinion_Collection.Web.Host.Startup
{
    [DependsOn(
       typeof(Public_Opinion_CollectionWebCoreModule))]
    public class Public_Opinion_CollectionWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public Public_Opinion_CollectionWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Public_Opinion_CollectionWebHostModule).GetAssembly());
        }
    }
}
