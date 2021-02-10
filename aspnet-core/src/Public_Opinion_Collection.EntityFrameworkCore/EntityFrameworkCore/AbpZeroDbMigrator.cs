using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using Abp.MultiTenancy;
using Abp.Zero.EntityFrameworkCore;

namespace Public_Opinion_Collection.EntityFrameworkCore
{
    public class AbpZeroDbMigrator : AbpZeroDbMigrator<Public_Opinion_CollectionDbContext>
    {
        public AbpZeroDbMigrator(
            IUnitOfWorkManager unitOfWorkManager,
            IDbPerTenantConnectionStringResolver connectionStringResolver,
            IDbContextResolver dbContextResolver)
            : base(
                unitOfWorkManager,
                connectionStringResolver,
                dbContextResolver)
        {
        }
    }
}
