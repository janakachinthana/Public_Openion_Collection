using System.Threading.Tasks;
using Public_Opinion_Collection.Configuration.Dto;

namespace Public_Opinion_Collection.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
