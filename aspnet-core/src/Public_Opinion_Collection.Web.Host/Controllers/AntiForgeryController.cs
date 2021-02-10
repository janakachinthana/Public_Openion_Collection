using System.Threading.Tasks;
using Abp.Web.Security.AntiForgery;
using Microsoft.AspNetCore.Antiforgery;
using Public_Opinion_Collection.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace Public_Opinion_Collection.Web.Host.Controllers
{
    public class AntiForgeryController : Public_Opinion_CollectionControllerBase
    {
        private readonly IAntiforgery _antiforgery;
        private readonly IAbpAntiForgeryManager _antiForgeryManager;

        public AntiForgeryController(IAntiforgery antiforgery, IAbpAntiForgeryManager antiForgeryManager)
        {
            _antiforgery = antiforgery;
            _antiForgeryManager = antiForgeryManager;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }

        public void SetCookie()
        {
            _antiForgeryManager.SetCookie(HttpContext);
        }
    }
}
