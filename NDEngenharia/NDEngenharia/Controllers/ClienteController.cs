using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NDEngenharia.Controllers
{
    public class ClienteController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {

            return View();
        }
    }
}