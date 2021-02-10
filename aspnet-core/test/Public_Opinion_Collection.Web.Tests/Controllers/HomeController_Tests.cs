using System.Threading.Tasks;
using Public_Opinion_Collection.Models.TokenAuth;
using Public_Opinion_Collection.Web.Controllers;
using Shouldly;
using Xunit;

namespace Public_Opinion_Collection.Web.Tests.Controllers
{
    public class HomeController_Tests: Public_Opinion_CollectionWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}