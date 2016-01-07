using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;

namespace NinjaPoker.Controllers
{
    public class APIController : ApiController
    {

        [HttpGet]
        public HttpResponseMessage Workout(int workoutId)
        {

            string content = File.ReadAllText(HttpContext.Current.Server.MapPath(@"~\data\workout.json"));

            var resp = new HttpResponseMessage()
            {
                Content = new StringContent(content)
            };
            resp.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return resp;

        }

        [HttpGet]
        public HttpResponseMessage Exercises()
        {

            string content = File.ReadAllText(HttpContext.Current.Server.MapPath(@"~\data\exercises.json"));

            var resp = new HttpResponseMessage()
            {
                Content = new StringContent(content)
            };
            resp.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return resp;

        }

        [HttpGet]
        public HttpResponseMessage History()
        {

            string content = File.ReadAllText(HttpContext.Current.Server.MapPath(@"~\data\history.json"));

            var resp = new HttpResponseMessage()
            {
                Content = new StringContent(content)
            };
            resp.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return resp;

        }

    }
}
