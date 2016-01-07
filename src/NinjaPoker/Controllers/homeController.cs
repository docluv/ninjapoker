using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace ninjaPoker.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            //HttpContext.Response.AddHeader("X-UA-Compatible", "IE=edge");
            //HttpContext.Response.Cache.SetLastModified(DateTime.UtcNow);

            return View();
        }

        public ActionResult Deferred()
        {

//            HttpContext.Response.Cache.SetLastModified(DateTime.UtcNow);

            return View();
        }

    }
}