using Xunit;

namespace Public_Opinion_Collection.Tests
{
    public sealed class MultiTenantFactAttribute : FactAttribute
    {
        public MultiTenantFactAttribute()
        {
            if (!Public_Opinion_CollectionConsts.MultiTenancyEnabled)
            {
                Skip = "MultiTenancy is disabled.";
            }
        }
    }
}
