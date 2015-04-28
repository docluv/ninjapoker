using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NinjaPoker.Startup))]
namespace NinjaPoker
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
