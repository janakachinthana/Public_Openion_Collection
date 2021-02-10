using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Public_Opinion_Collection.Configuration;
using Public_Opinion_Collection.Web;

namespace Public_Opinion_Collection.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class Public_Opinion_CollectionDbContextFactory : IDesignTimeDbContextFactory<Public_Opinion_CollectionDbContext>
    {
        public Public_Opinion_CollectionDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<Public_Opinion_CollectionDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            Public_Opinion_CollectionDbContextConfigurer.Configure(builder, configuration.GetConnectionString(Public_Opinion_CollectionConsts.ConnectionStringName));

            return new Public_Opinion_CollectionDbContext(builder.Options);
        }
    }
}
