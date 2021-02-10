using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.EntityFrameworkCore;
using Abp.EntityFrameworkCore.Repositories;

namespace Public_Opinion_Collection.EntityFrameworkCore.Repositories
{
    /// <summary>
    /// Base class for custom repositories of the application.
    /// </summary>
    /// <typeparam name="TEntity">Entity type</typeparam>
    /// <typeparam name="TPrimaryKey">Primary key type of the entity</typeparam>
    public abstract class Public_Opinion_CollectionRepositoryBase<TEntity, TPrimaryKey> : EfCoreRepositoryBase<Public_Opinion_CollectionDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected Public_Opinion_CollectionRepositoryBase(IDbContextProvider<Public_Opinion_CollectionDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }

        // Add your common methods for all repositories
    }

    /// <summary>
    /// Base class for custom repositories of the application.
    /// This is a shortcut of <see cref="Public_Opinion_CollectionRepositoryBase{TEntity,TPrimaryKey}"/> for <see cref="int"/> primary key.
    /// </summary>
    /// <typeparam name="TEntity">Entity type</typeparam>
    public abstract class Public_Opinion_CollectionRepositoryBase<TEntity> : Public_Opinion_CollectionRepositoryBase<TEntity, int>, IRepository<TEntity>
        where TEntity : class, IEntity<int>
    {
        protected Public_Opinion_CollectionRepositoryBase(IDbContextProvider<Public_Opinion_CollectionDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }

        // Do not add any method here, add to the class above (since this inherits it)!!!
    }
}
