using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace Public_Opinion_Collection.Authorization
{
    public class Public_Opinion_CollectionAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Petitions, L("Petitions"));
            context.CreatePermission(PermissionNames.Pages_Comments, L("Comments"));
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, Public_Opinion_CollectionConsts.LocalizationSourceName);
        }
    }
}
