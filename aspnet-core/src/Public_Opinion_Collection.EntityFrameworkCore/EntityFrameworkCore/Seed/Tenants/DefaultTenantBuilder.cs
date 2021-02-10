using System.Linq;
using Microsoft.EntityFrameworkCore;
using Abp.MultiTenancy;
using Public_Opinion_Collection.Editions;
using Public_Opinion_Collection.MultiTenancy;

namespace Public_Opinion_Collection.EntityFrameworkCore.Seed.Tenants
{
    public class DefaultTenantBuilder
    {
        private readonly Public_Opinion_CollectionDbContext _context;

        public DefaultTenantBuilder(Public_Opinion_CollectionDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateDefaultTenant();
        }

        private void CreateDefaultTenant()
        {
            // Default tenant

            var defaultTenant = _context.Tenants.IgnoreQueryFilters().FirstOrDefault(t => t.TenancyName == AbpTenantBase.DefaultTenantName);
            if (defaultTenant == null)
            {
                defaultTenant = new Tenant(AbpTenantBase.DefaultTenantName, AbpTenantBase.DefaultTenantName);

                var defaultEdition = _context.Editions.IgnoreQueryFilters().FirstOrDefault(e => e.Name == EditionManager.DefaultEditionName);
                if (defaultEdition != null)
                {
                    defaultTenant.EditionId = defaultEdition.Id;
                }

                _context.Tenants.Add(defaultTenant);
                _context.SaveChanges();
            }
        }
    }
}
