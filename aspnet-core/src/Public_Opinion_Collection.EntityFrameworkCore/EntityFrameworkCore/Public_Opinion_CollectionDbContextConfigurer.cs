using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Public_Opinion_Collection.EntityFrameworkCore
{
    public static class Public_Opinion_CollectionDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<Public_Opinion_CollectionDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<Public_Opinion_CollectionDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
