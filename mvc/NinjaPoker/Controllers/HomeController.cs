using System;
using System.Web;
using System.Web.Mvc;

namespace ninjaPoker.Controllers
{
    public class HomeController : Controller
    {
        [OutputCache(Duration = 60, VaryByParam = "None")]
        public ActionResult Index()
        {

            HttpContext.Response.AddHeader("X-UA-Compatible", "IE=edge");
            HttpContext.Response.Cache.SetLastModified(DateTime.UtcNow);

            return View();
        }

        [OutputCache(Duration = 60, VaryByParam = "None")]
        public ActionResult Deferred()
        {

            HttpContext.Response.Cache.SetLastModified(DateTime.UtcNow);

            return View();
        }

    }
}