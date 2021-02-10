using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Public_Opinion_Collection.Authorization.Roles;
using Public_Opinion_Collection.Authorization.Users;
using Public_Opinion_Collection.MultiTenancy;
using Public_Opinion_Collection.Domain;
using System.Reflection;

namespace Public_Opinion_Collection.EntityFrameworkCore
{
    public class Public_Opinion_CollectionDbContext : AbpZeroDbContext<Tenant, Role, User, Public_Opinion_CollectionDbContext>
    {
        /* Define a DbSet for each entity of the application */

        public DbSet<Petition> Petitions { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<LikeStatus> LikeStatus { get; set; }
        public Public_Opinion_CollectionDbContext(DbContextOptions<Public_Opinion_CollectionDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
