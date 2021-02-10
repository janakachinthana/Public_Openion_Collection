using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Public_Opinion_Collection.Configuration.Dto;

namespace Public_Opinion_Collection.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : Public_Opinion_CollectionAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
