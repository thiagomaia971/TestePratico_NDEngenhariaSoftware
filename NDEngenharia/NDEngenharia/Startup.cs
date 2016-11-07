using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NDEngenharia.Startup))]
namespace NDEngenharia
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
