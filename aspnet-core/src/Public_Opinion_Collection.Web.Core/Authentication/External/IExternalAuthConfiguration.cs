using System.Collections.Generic;

namespace Public_Opinion_Collection.Authentication.External
{
    public interface IExternalAuthConfiguration
    {
        List<ExternalLoginProviderInfo> Providers { get; }
    }
}
