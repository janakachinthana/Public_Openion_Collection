using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Public_Opinion_Collection.Controllers
{
    public abstract class Public_Opinion_CollectionControllerBase: AbpController
    {
        protected Public_Opinion_CollectionControllerBase()
        {
            LocalizationSourceName = Public_Opinion_CollectionConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
