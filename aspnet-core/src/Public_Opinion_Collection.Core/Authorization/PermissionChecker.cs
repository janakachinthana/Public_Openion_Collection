using Abp.Authorization;
using Public_Opinion_Collection.Authorization.Roles;
using Public_Opinion_Collection.Authorization.Users;

namespace Public_Opinion_Collection.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
