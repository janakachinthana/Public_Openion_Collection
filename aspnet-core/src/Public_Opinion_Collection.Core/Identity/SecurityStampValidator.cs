using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Abp.Authorization;
using Public_Opinion_Collection.Authorization.Roles;
using Public_Opinion_Collection.Authorization.Users;
using Public_Opinion_Collection.MultiTenancy;
using Microsoft.Extensions.Logging;

namespace Public_Opinion_Collection.Identity
{
    public class SecurityStampValidator : AbpSecurityStampValidator<Tenant, Role, User>
    {
        public SecurityStampValidator(
            IOptions<SecurityStampValidatorOptions> options,
            SignInManager signInManager,
            ISystemClock systemClock,
            ILoggerFactory loggerFactory) 
            : base(options, signInManager, systemClock, loggerFactory)
        {
        }
    }
}
